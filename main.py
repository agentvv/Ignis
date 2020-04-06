from flask import Flask
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

from models import *

app = Flask(__name__, template_folder='./templates')

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Italia13254@localhost:5432/ignis'
app.config['TESTING'] = False
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

from game import game as gameBlueprint
app.register_blueprint(gameBlueprint)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)


