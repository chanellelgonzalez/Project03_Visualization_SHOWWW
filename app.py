#import flask
from flask import Flask ,  render_template
# import psycopg2

app = Flask(__name__,template_folder='template')#you can add the folder with the static HTML, CSS and Javascript files here


#making the first app route use template in two lines below if you want more pages
    #in the '@app.route line you have to chose the page url in the ('/') example: ('/dashboard') 
# @app.route('/')
# def hello():
@app.route('/')
def hello():
    return render_template('home.html')#put the html file of your home page here

if __name__ == '__main__':
    app.run(debug=True) #turn off debug if it goes into production? i see it mentioned IDK what that means


#to run the flask server type 'python app.py' into bash to close the server hit 'ctrl+c'