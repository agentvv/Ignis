
from flask import Blueprint, render_template, request
import json

game = Blueprint('game', __name__)

from main import db
from models import SavedGame

@game.route('/')
def playGame():
    return render_template('game.html')

@game.route('/api/new', methods=['POST'])
def new():
    data = request.json
    name = data['name']
    gameState = json.dumps(data)

    game = SavedGame(name=name, gameState=gameState)

    db.session.add(game)
    db.session.commit()

    return "Game created."


#@game.route('/api/save')
#def save():
#    game = request.json
    


@game.route('/api/load', methods=['POST'])
def load():
    data = request.json
    game = SavedGame.query.filter_by(id=data).first()
    return json.loads(game.gameState)

@game.route('/api/all', methods=['GET'])
def all():
    games = SavedGame.query.all()
    gameList = []
    for game in games:
        gameList.append({"id": game.id, "name": game.name})

    return json.dumps(gameList)