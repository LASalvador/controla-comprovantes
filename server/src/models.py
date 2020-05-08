from . import db


class Conta(db.Model):
    """Data model for user accounts."""

    __tablename__ = 'conta'
    id = db.Column(db.Integer,
                   primary_key=True)
    nome = db.Column(db.String(64),
                         index=False,
                         unique=True,
                         nullable=False)
    email = db.Column(db.String(80),
                      index=True,
                      unique=True,
                      nullable=False)
    saldo = db.Column(db.Float)

    def __repr__(self):
        return '<Conta {}>'.format(self.nome)