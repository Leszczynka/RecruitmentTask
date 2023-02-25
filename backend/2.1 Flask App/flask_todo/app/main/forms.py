from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length


class ToDoListForm(FlaskForm):
    task = StringField(validators=[DataRequired(), Length(min=1, max=100)])
    submit = SubmitField('Submit')
