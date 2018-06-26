from flask import Flask, redirect, request
from funcTest import *

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hellom World!'


@app.route('/login', methods = ['GET'])
def login():
    if request.method == 'GET':
        userId = request.args.get('id')
        userPwd = request.args.get('pwd')
        print(userId , userPwd)
        list = getBlBoardInfo(userId, userPwd)
        return list

if __name__ == '__main__':
    app.run(debug = True)