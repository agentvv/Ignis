from flask import Blueprint, render_template


game = Blueprint('game', __name__)

from main import db

@game.route('/')
def playGame():
    return render_template('game.html')