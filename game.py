from flask import Blueprint, render_template
import json

game = Blueprint('game', __name__)

from main import db

@game.route('/')
def playGame():
    return render_template('game.html')

@game.route('/api/new')
def new():
    data = request.json
    name = data[0]
    gameState = json.dumps(data[1])

    game = SavedGame(name=name, gameState=gameState)

    db.session.add(game)
    db.session.commit()

    return "Game created."


#@game.route('/api/save')
#def save():
#    game = request.json
    


@game.route('/api/load')
def load():
    data = request.json
    game = SavedGame.query.filter_by(id=data).first()
    return json.loads(game.gameState)
