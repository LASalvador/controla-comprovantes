from flask import request, json, jsonify
from src import app, db
from src.models import TipoTransacao, Perfil, Usuario, Conta, UsuarioConta, Transacao, Categoria, ContaCategoria
from flask_sqlalchemy import SQLAlchemy

@app.route('/')
def index():
    return "Server Works"

@app.route('/transacao', methods=['POST'])
def post_transacao():
    req = request.json

    transacao = Transacao(desc = req['desc'], tipo = req['tipo_id'], valor = req['valor'], conta_id = req['conta_id'], categoria_id = req['categoria_id'], usuario_id = req['usuario_id'])
    
    db.session.add(transacao)
    db.session.commit()

    transacao_dict = transacao.asdict()

    response = jsonify({
        'transacao': transacao_dict
    })

    return response


@app.route('/transacoes/<int:conta_id>', methods=['GET'])
def get_transacoes(conta_id):

    transacoes = db.session.query(Transacao).join(TipoTransacao, Transacao.tipo == TipoTransacao.id).join(Categoria, Transacao.categoria_id == Categoria.id).join(Usuario, Transacao.usuario_id == Usuario.id).add_columns(TipoTransacao.nome, Categoria.desc, Usuario.nome).filter(Transacao.conta_id == conta_id).all()

    transacoes_list = []
    for transacao in transacoes:
        transacao_dict = {}
        transacao_dict = transacao[0].asdict()
        transacao_dict['tipo_desc'] = transacao[1]
        transacao_dict['categoria_desc'] = transacao[2]
        transacao_dict['usuario_nome'] = transacao[3]
        transacoes_list.append(transacao_dict)

    response = jsonify({
        'transacoes': transacoes_list
    })

    return response

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
        'user_id': usuario. id
    })

    return response


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

@app.route('/nova_conta', methods=['POST'])
def nova_conta():
    req = request.json

    conta = Conta(saldo = 0, perfil_id = req['perfil_id'])
    db.session.add(conta)
    db.session.commit()

    usuarioConta = UsuarioConta(usuario_id = req['usuario_id'], conta_id = conta.id)
    db.session.add(usuarioConta)
    db.session.commit()

    response = jsonify({
        'conta_id': conta.id,
        'usuario_conta_id': usuarioConta.id
    })

    return response


@app.route('/conta/<int:user_id>', methods=['GET'])
def get_conta_usuarios(user_id):
    contas = db.session.query(UsuarioConta).join(Conta, UsuarioConta.conta_id == Conta.id).join(Perfil, Conta.perfil_id == Perfil.id).add_columns(Perfil.desc, Conta.saldo).filter(UsuarioConta.usuario_id == user_id).all()
    contas_list = []
    for conta in contas:
        conta_dict = {}
        conta_dict = conta[0].asdict()
        conta_dict['perfil'] = conta[1]
        conta_dict['saldo'] = conta[2]
        contas_list.append(conta_dict)

    response = jsonify({
        'contas_usuario' : contas_list
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

@app.route('/categoria/<int:conta_id>', methods=['GET'])
def get_categorias(conta_id):
    categorias = db.session.query(ContaCategoria).join(Categoria, ContaCategoria.categoria_id == Categoria.id).add_columns(Categoria.desc).filter(ContaCategoria.conta_id == conta_id).all()
    categoria_list = []
    for categoria in categorias:
        categoria_dict = {}
        categoria_dict = categoria[0].asdict()
        categoria_dict['categoria_desc'] = categoria[1]
        categoria_list.append(categoria_dict)

    response = jsonify({
        'categorias_conta': categoria_list
    })

    return response

@app.route('/categoria/', methods=['POST'])
def post_categoria():
    req = request.json
    
    categoria = Categoria(desc = req['categoria_desc'])
    db.session.add(categoria)
    db.session.commit()


    cc = ContaCategoria(conta_id = req['conta_id'], categoria_id = categoria.id)
    db.session.add(cc)
    db.session.commit()

    response = jsonify({
        'categoria_id': categoria.id,
        'categoria_conta_id': cc.id,
    })

    return response

@app.route('/login', methods=['POST'])
def post_login():
    req = request.json

    email = req['email']
    uid = req['uid']

    usuario = db.session.query(Usuario).filter(Usuario.email == email, Usuario.uid == uid).first()

    usuario_dict = usuario.asdict()

    response = jsonify({
        'usuario': usuario_dict,
    })

    return response

@app.route('/home/<int:conta_id>', methods=['GET'])
def get_home(conta_id):
    gastos = db.session.que ry(db.func.sum(Transacao.valor)).filter(Transacao.tipo == 2, Transacao.conta_id == conta_id)
    print(gastos)
    return 'sucesso'



