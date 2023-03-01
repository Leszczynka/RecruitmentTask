# Flask To Do App REST API
Simple to-do list REST API made in Flask framework .

## Table of contents
* [Key features](#key-features)
* [Endpoints](#endpoints)
* [Technology](#technology)
* [Setup and run](#setup-and-run)

### Key features
* REST API - app allows user to interact with to-do list using REST API calls.

### Endpoints
* POST http://127.0.0.1:5000/api/tasks - create task
* GET http://127.0.0.1:5000/api/tasks - read all tasks
* GET http://127.0.0.1:5000/api/tasks/{id} - read task
* PUT http://127.0.0.1:5000/api/tasks/{id} - update task
* DELETE http://127.0.0.1:5000/api/tasks/{id} - delete task

Endpoints have been tested in Postman.

### Technology
* Python 3.10
* Flask 2.2
* Bootstrap 5
* SQL Alchemy
* PostgreSQL

### Setup and run
1. Clone the repo.
2. Create a virtual environment and activate it:
```bash
python -m venv venv

source venv/bin/activate
```
3. Make sure you have Postgres installed or if you're using Docker, make sure your docker container with Postgres is running.
4. Create .env file with your database credentials in the form of URI string and also provide SECRET_KEY to keep the sessions secure. For example:
DATABASE_URI=postgresql://user:password@host:port/database_name

    SECRET_KEY=os.urandom(24)
5. From your command line pointing to the project root directory (flask_todo/):


```bash
# Install requirements:
pip install -r requirements.txt

# Create table:
$ flask shell
>> db.create_all()
>> exit()

# Run server:
python flask run
```
You are now able to access `localhost:5000` in your browser.

In the case of developing this app in the future I rearranged and extend the project structure and also provide graphical interface of this application (flask_todo/app/main).