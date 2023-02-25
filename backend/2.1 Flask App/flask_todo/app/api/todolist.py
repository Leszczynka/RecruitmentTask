from flask import jsonify, request, abort
from . import api
from ..models import ToDoList


@api.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = ToDoList.query.all()
    return jsonify([task.to_json() for task in tasks])


@api.route("/tasks/<int:id>", methods=["GET"])
def get_task(id):
    task = ToDoList.query.get_or_404(id)
    return jsonify(task.to_json())


@api.route("/tasks", methods=["POST"])
def add_task():
    data = request.get_json()
    if not data or not data['task']:
        abort(400)
    task = ToDoList(data['task'])
    task.save()
    return jsonify(task.to_json())


@api.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    task = ToDoList.query.get_or_404(id)
    data = request.get_json()
    if not data or not data['task']:
        abort(400)
    task.task = data['task']
    task.save()
    return jsonify(task.to_json())


@api.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    task = ToDoList.query.get_or_404(id)
    task.delete()
    return jsonify(task.to_json())