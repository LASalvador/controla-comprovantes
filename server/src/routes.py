from flask import request, json, jsonify
from src import app

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