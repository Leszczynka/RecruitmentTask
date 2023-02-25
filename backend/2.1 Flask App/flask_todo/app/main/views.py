from flask import render_template, redirect, request
from . import main
from .forms import ToDoListForm
from ..models import ToDoList


@main.route('/', methods=['GET', 'POST'])
def index():
    form = ToDoListForm()
    if request.method == 'POST' and form.validate_on_submit():
        task = form.task.data
        new_task = ToDoList(task=task)
        new_task.save()
        return redirect('/')
    tasks = ToDoList.query.all()
    return render_template('index.html', tasks=tasks, form=form)