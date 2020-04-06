from main import db
from datetime import datetime

datetime 

class SavedGame(db.Model):
    __tablename__ = "savedgames"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, default =datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    gameState = db.Column(db.Text, default="")