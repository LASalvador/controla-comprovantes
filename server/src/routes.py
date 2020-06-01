from flask import request, json, jsonify
from src import app, db
from src.models import TipoTransacao, Perfil, Usuario, Conta, UsuarioConta

@app.route('/')
def index():
    return "Server Works"

@app.route('/home')
def get_home():
    return 'HOMEEE'

@app.route('/conta', methods=['POST'])
def post_conta():
    return "salvar conta"

@app.route('/transacao', methods=['POST'])
def post_transacao():
    return "salvar transacao"


@app.route('/transacoes', methods=['GET'])
def get_transacoes():
    return "listar transacao"

@app.route('/usuario', methods=['POST'])
def post_usuario():
    req = request.json
    # listax = req['x']
    usuario = Usuario(nome = req['nome'], email = req['email'], uid = req['uid'])
    db.session.add(usuario)
    db.session.commit()

    conta = Conta(saldo = 0, perfil_id = req['perfil_id'])
    db.session.add(conta)
    db.session.commit()

    usuarioConta = UsuarioConta(usuario_id = usuario.id, conta_id = conta.id)
    db.session.add(usuarioConta)
    db.session.commit()

    response = jsonify({
        'user_id': usuario.id,
        'conta_id': conta.id
    })

    return response

@app.route('/novo',methods=['POST'])
def post_novo_usuario():
    req = request.json

    usuario = Usuario(nome = req['nome'], email = req['email'], uid = req['uid'])
    db.session.add(usuario)
    db.session.commit()

    usuarioConta = UsuarioConta(usuario_id = usuario.id, conta_id = req['conta_id'])
    db.session.add(usuarioConta)
    db.session.commit()

    response = jsonify({
        'user_id': usuario.id
    })


@app.route('/usuarios/<int:conta_id>', methods=['GET'])
def get_usuarios_conta(conta_id):
    users = db.session.query(UsuarioConta).join(Usuario, UsuarioConta.usuario_id == Usuario.id).add_columns(Usuario.nome).filter(UsuarioConta.conta_id == conta_id).all()
    users_list = []
    for user in users:
        users_dict = {}
        users_dict = user[0].asdict()
        users_dict['usuario_nome'] = user[1]
        users_list.append(users_dict)

    response = jsonify({
        'usuarios_conta': users_list
    })

    return response

@app.route('/tptransacao', methods=['GET'])
def get_tp_transacoes():
    transacoes_response = TipoTransacao.query.all()
    transacao_list = []

    for transacao in transacoes_response:
        transacao_list.append(transacao.asdict())

    response = jsonify({
        'tipo_transacoes': transacao_list
    })

    return response

@app.route('/perfil', methods=['GET'])
def get_perfil():
    perfil_response = Perfil.query.all()
    perfil_list = []

    for transacao in perfil_response:
        perfil_list.append(transacao.asdict())

    response = jsonify({
        'perfil': perfil_list
    })

    return response


def list_to_dict(model_list):
    list_response = []

    for item in model_list:
        list_response.append(item.asdict())
    
    return list_response
