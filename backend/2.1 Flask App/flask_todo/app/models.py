from . import db


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
            'id': self.id,
            'task': self.task
        }
        return json_todo
