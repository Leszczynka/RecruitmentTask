# Django Blog
Simple blog app made in Django framework.

## Table of contents
* [Key features](#key-features)
* [Technology](#technology)
* [Setup and run](#setup-and-run)

### Key features
* User registration na login.
* Creating posts.
* Updating posts.


### Technology
* Python 3.10
* Django 4.1
* Bootstrap 5
* SQLite

### Setup and run
1. Clone the repo.
2. Create a virtual environment and activate it:
```bash
python -m venv venv
source venv/bin/activate
```
3. From your command line pointing to the project root directory:
```bash
# Install requirements:
pip install requirements

# Migrate tables:
python manage.py migrate

# Optionally, to access the django admin:
python manage.py createsuperuser

# Run server:
python manage.py runserver
```
You are now able to access `localhost:8000` in your browser.