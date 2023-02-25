from dotenv import load_dotenv
from flask import Flask
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
import os

load_dotenv()
db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    db.init_app(app)
    Bootstrap(app)
    from .api import api as api_blueprint
    app.register_blueprint(api_blueprint, url_prefix='/api')

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
