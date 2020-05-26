from datetime import  datetime
from src import db

class Usuario(db.Model):
    __tablename__ = 'usuario'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    uid = db.Column(db.String(200), index=True, unique=True, nullable=False)
    nome = db.Column(db.String(64), index=False, unique=True, nullable=False)

    def __repr__(self):
        return '<Usuario {}>'.format(self.nome)

class UsuarioConta(db.Model):
    __tablename__ = 'usuarioXConta'
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))
    conta_id = db.Column(db.Integer, db.ForeignKey('conta.id'))

    def __repr__(self):
        return '<usuarioXConta {}>'.format(self.id)


class Perfil(db.Model):
    __tablename__ = 'perfil'
    id = db.Column(db.Integer, primary_key=True)
    desc = db.Column(db.String(120), index=True, unique=True, nullable=False)

    def __repr__(self):
        return '<Perfil {}>'.format(self.desc)
        
class Categoria(db.Model):
    __tablename__ = 'categoria'
    id = db.Column(db.Integer, primary_key=True)
    desc = db.Column(db.String(120), index=True, unique=True, nullable=False)

    def __repr__(self):
        return '<Categoria {}>'.format(self.desc)

class ContaCategoria(db.Model):
    __tablename__ = 'contaXusuario'
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))
    categoria_id = db.Column(db.Integer, db.ForeignKey('categoria.id'))

    def __repr__(self):
        return '<contaXusuario {}>'.format(self.id)

class Conta(db.Model):
    __tablename__ = 'conta'
    id = db.Column(db.Integer, primary_key=True)
    saldo = db.Column(db.Float)
    perfil_id = db.Column(db.Integer, db.ForeignKey('perfil.id'))

    def __repr__(self):
        return '<Conta {}>'.format(self.id)

class Transacao(db.Model):
    __tablename__ = 'transacao'
    id = db.Column(db.Integer, primary_key=True)
    desc = db.Column(db.String(140))
    tipo = db.Column(db.Integer, db.ForeignKey('tipo_transacao.id'))
    comprovante = db.Column(db.String(140))
    valor = db.Column(db.Integer, nullable=False)
    data = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    conta_id = db.Column(db.Integer, db.ForeignKey('conta.id'))
    categoria_id = db.Column(db.Integer, db.ForeignKey('categoria.id'))
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))

    def __repr__(self):
        return '<Transacao {}>'.format(self.desc)

class TipoTransacao(db.Model):
    __tablename__ = 'tipo_transacao'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(20))

