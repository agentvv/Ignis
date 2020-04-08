
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

    return json.dumps(game.id)

@game.route('/api/save', methods=['POST'])
def save():
    data = request.json
    gameID = data['id']
    gameState = data['game']
    gameToChange = SavedGame.query.filter_by(id=gameID).first()
    gameToChange.gameState = json.dumps(gameState)
    db.session.commit()
    return 'Game saved.'

@game.route('/api/load', methods=['POST'])
def load():
    data = request.json
    game = SavedGame.query.filter_by(id=data).first()
    return game.gameState

@game.route('/api/all', methods=['GET'])
def all():
    games = SavedGame.query.all()
    gameList = []
    for game in games:
        gameList.append({"id": game.id, "name": game.name})

    return json.dumps(gameList)

@game.route('/api/delete', methods=['POST'])
def delete():
    gameID = request.json
    game = SavedGame.query.filter_by(id=gameID).first()
    db.session.delete(game)
    dn.session.commit()
    return 'Game deleted'