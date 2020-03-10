from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def index():
    return 'Server Works'

@app.route('/greet')
def sayHello():
    return 'Hello from Server'

@app.route('/user/<username>')
def show_user(username):
  #returns the username
  return 'Username: %s' % username

