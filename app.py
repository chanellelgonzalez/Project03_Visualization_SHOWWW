#import flask
from flask import Flask ,  render_template
app = Flask(__name__)


#making the first app route use template in two lines below if you want more pages
    #in the '@app.route line you have to chose the page url in the ('/') example: ('/dashboard') 
# @app.route('/')
# def hello():
@app.route('/')
def hello():
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=True) #turn off debug if it goes into production? i see it mentioned IDK what that means