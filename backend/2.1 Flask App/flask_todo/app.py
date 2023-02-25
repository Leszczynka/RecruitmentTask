from flask import Flask, render_template, jsonify, abort, request
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

    def __init__(self, task):
        self.task = task

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def to_json(self):
        json_todo = {
            'task': self.task
        }
        return json_todo


@app.route('/')
def home():
    return render_template('index.html')


@app.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = ToDoList.query.all()
    return jsonify([task.to_json() for task in tasks])


@app.route("/tasks/<int:id>", methods=["GET"])
def get_task(id):
    task = ToDoList.query.get_or_404(id)
    return jsonify(task.to_json())


@app.route("/tasks", methods=["POST"])
def add_task():
    data = request.get_json()
    if not data or not data['task']:
        abort(400)
    task = ToDoList(data['task'])
    task.save()
    return jsonify(task.to_json())


@app.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    task = ToDoList.query.get_or_404(id)
    data = request.get_json()
    if not data or not data['task']:
        abort(400)
    task.task = data['task']
    task.save()
    return jsonify(task.to_json())


@app.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    task = ToDoList.query.get_or_404(id)
    task.delete()
    return jsonify(task.to_json())


if __name__ == '__main__':
    app.run(debug=True)