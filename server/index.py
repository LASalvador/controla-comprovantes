# from flask import Flask, request
# app = Flask(__name__)

# @app.route('/')
# def index():
#     return 'Server Works'

# @app.route('/upload/', methods=['POST'])
# def upload_file():
#     static_file = request.files['the_file']
#     print(static_file)
#     return 'salvooo'


from src import app


app.run()