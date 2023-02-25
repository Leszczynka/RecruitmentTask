from flask import Flask, render_template, jsonify, make_response, abort, request
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
db = SQLAlchemy(app)


class ToDoList(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(250), nullable=False)


@app.route('/')
def home():
    return render_template('index.html')


@app.route("/tasks", methods=["GET"])
def get_tasks():
    pass


@app.route("/tasks/<int:id>", methods=["GET"])
def get_task(id):
    pass


@app.route("/tasks", methods=["POST"])
def add_task():
    pass


@app.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    pass


@app.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    pass


if __name__ == '__main__':
    app.run(debug=True)