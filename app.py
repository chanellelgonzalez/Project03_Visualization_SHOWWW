#Flask app
from flask import Flask
app = Flask(__name__)

@app.route('/dashboard')
def hello():
    return 'Hello World!'

@app.route('/about')
def hello():
    return 'Hello World!'

if __name__ == '__main__':
    app.run(debug=True)
