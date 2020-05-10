from datetime import  datetime
from src import db


class Conta(db.Model):
    """Data model for user accounts."""

    __tablename__ = 'conta'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(64),
                         index=False,
                         unique=True,
                         nullable=False)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    saldo = db.Column(db.Float)

    def __repr__(self):
        return '<Conta {}>'.format(self.nome)

class Transacao(db.Model):
    __tablename__ = 'transacao'
    id = db.Column(db.Integer, primary_key=True)
    desc = db.Column(db.String(140))
    tipo = db.Column(db.String(140))
    comprovante = db.Column(db.String(140))
    valor = db.Column(db.Integer, nullable=False)
    data = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    conta_id = db.Column(db.Integer, db.ForeignKey('conta.id'))

    def __repr__(self):
        return '<Post {}>'.format(self.body)