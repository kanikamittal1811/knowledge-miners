# Knowledge Miners
Knowledge Miners is a web app to mange your courses and learning sources to complete them timely.
Key features:
- Track your progress
- Faster completion time
- Collaborate with friends
- Boost your performance

## Steps to run

```bash
$ # Get the code
$ git clone https://github.com/HimanshuMittal01/knowledge-miners.git
$ cd flask-idashboard-free
$
$ # Virtualenv modules installation (Unix based systems)
$ virtualenv env
$ source env/bin/activate
$
$ # Virtualenv modules installation (Windows based systems)
$ # virtualenv env
$ # .\env\Scripts\activate
$
$ # Install modules - SQLite Database
$ pip3 install -r requirements.txt
$
$ # OR with PostgreSQL connector
$ # pip install -r requirements-pgsql.txt
$
$ # Set the FLASK_APP environment variable
$ (Unix/Mac) export FLASK_APP=run.py
$ (Windows) set FLASK_APP=run.py
$ (Powershell) $env:FLASK_APP = ".\run.py"
$
$ # Set up the DEBUG environment
$ # (Unix/Mac) export FLASK_ENV=development
$ # (Windows) set FLASK_ENV=development
$ # (Powershell) $env:FLASK_ENV = "development"
$
$ # Start the application (development mode)
$ # --port=5000    - specify the app port (default 5000)  
$ flask run --port=5000
$
$ # Access the dashboard in browser: http://127.0.0.1:5000/
$ # Create a new user and authenticate
```

## Credits
Thanks to appseed for providing starter template: https://github.com/app-generator/flask-dashboard-atlantis-dark/
