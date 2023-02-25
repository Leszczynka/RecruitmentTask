from flask import render_template, redirect, request
from . import main
from .forms import ToDoListForm
from .. import db
from ..models import ToDoList


@main.route('/', methods=['GET', 'POST'])
def index():
    form = ToDoListForm()
    if request.method == 'POST' and form.validate_on_submit():
        task = form.task.data
        new_task = ToDoList(task=task)
        new_task.save()
        return redirect('/')
    tasks = ToDoList.query.order_by(ToDoList.id).all()
    return render_template('index.html', tasks=tasks, form=form)


@main.route('/tasks/<int:id>/update', methods=['GET', 'POST'])
def update_task(id):
    task_to_update = ToDoList.query.get_or_404(id)
    form = ToDoListForm()
    if form.is_submitted():
        task_to_update.task = form.task.data
        db.session.commit()
        return redirect('/')
    form.task.data = task_to_update.task
    return render_template('task_form.html', form=form)
