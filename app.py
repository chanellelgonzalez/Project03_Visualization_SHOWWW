#import flask
from flask import Flask ,  render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text

# ~~~~~~ beginner guide to sql alchemy, Flask and Connecting a Database ~~~~~
# https://python-adv-web-apps.readthedocs.io/en/latest/flask_db1.html

# ~~~~~ beginner flask tutorial with CSS and JS and HTML ++ images ~~~~~~~
# https://www.youtube.com/watch?v=w54WLGm4OrE

# ~~~~~ Flask and SQL alchemy documentation ~~~~~~~
# https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/

# this variable, db, will be used for all SQLAlchemy commands
db = SQLAlchemy()

#creating flask app
app = Flask(__name__,template_folder='template')#you can add the folder with the static HTML, CSS and Javascript files here
                                                    #if you don't the flask app won't find it for some reason


#making the first app route use template in two lines below if you want more pages
    #in the '@app.route line you have to chose the page url in the ('/') example: ('/dashboard') 
# @app.route('/')
# def hello():
#   return ##your code here##
@app.route('/')
def hello():
    return render_template('home.html')#put the html file of your home page here

if __name__ == '__main__':
    app.run(debug=True) #turn off debug if it goes into production? i see it mentioned IDK what that means


#to run the flask server type 'python app.py' into bash to close the server hit 'ctrl+c'