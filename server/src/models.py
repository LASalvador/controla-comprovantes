from datetime import  datetime
from src import db

class Usuario(db.Model):
    __tablename__ = 'usuario'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    uid = db.Column(db.String(200), index=True, unique=True, nullable=False)
    nome = db.Column(db.String(64), index=False, nullable=False)

    def asdict(self):
        return {'id': self.id, 'email': self.email, 'uid': self.uid, 'nome': self.nome}

    def __repr__(self):
        return '<Usuario {}>'.format(self.nome)

class UsuarioConta(db.Model):
    __tablename__ = 'usuarioXConta'
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))
    conta_id = db.Column(db.Integer, db.ForeignKey('conta.id'))

    def __repr__(self):
        return '<usuarioXConta {}>'.format(self.id)
    
    def asdict(self):
        return {'id': self.id, 'usuario_id': self.usuario_id, 'conta_id': self.conta_id}


class Perfil(db.Model):
    __tablename__ = 'perfil'
    id = db.Column(db.Integer, primary_key=True)
    desc = db.Column(db.String(120), index=True, unique=True, nullable=False)

    def __repr__(self):
        return '<Perfil {}>'.format(self.desc)

    def asdict(self):
        return {'id': self.id, 'desc': self.desc}
        
class Categoria(db.Model):
    __tablename__ = 'categoria'
    id = db.Column(db.Integer, primary_key=True)
    desc = db.Column(db.String(120), index=True, unique=True, nullable=False)

    def __repr__(self):
        return '<Categoria {}>'.format(self.desc)

    def asdict(self):
        return {'id': self.id, 'desc': self.desc} 

class ContaCategoria(db.Model):
    __tablename__ = 'contaXcategoria'
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))
    categoria_id = db.Column(db.Integer, db.ForeignKey('categoria.id'))

    def __repr__(self):
        return '<contaXusuario {}>'.format(self.id)
    
    def asdict(self):
        return {'id': self.id, 'usuario_id': self.usuario_id, 'categoria_id': self.categoria_id}

class Conta(db.Model):
    __tablename__ = 'conta'
    id = db.Column(db.Integer, primary_key=True)
    saldo = db.Column(db.Float)
    perfil_id = db.Column(db.Integer, db.ForeignKey('perfil.id'))

    def __repr__(self):
        return '<Conta {}>'.format(self.id)

    def asdict(self):
        return {'id': self.id, 'saldo': self.saldo, 'perfil_id': self.perfil_id }

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

    def asdict(self):
        return {'id': self.id, 'desc': self.desc, 'tipo_id': self.tipo, 'valor': self.valor, 'data': self.data, 'conta_id': self.conta_id, 'categoria_id': self.categoria_id, 'usuario_id': self.usuario_id }

class TipoTransacao(db.Model):
    __tablename__ = 'tipo_transacao'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(20))
    
    def __repr__(self):
        return '<Transacao {}>'.format(self.nome)

    def asdict(self):
        return {'id': self.id, 'nome': self.nome }
