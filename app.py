from matplotlib import style
style.use('fivethirtyeight')
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import datetime as dt
import psycopg2
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask
from flask import Flask, jsonify

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup 
#i named the server project 3 and the database "ticketmaster"
#################################################

def create_connection():
    conn = psycopg2.connect(
        host='localhost',
        port='5432',
        database='ticketmaster',
        user='postgres',
        password='yourpassword'
    )
    return conn

#################################################
# Root endpoint
#################################################
@app.route("/")
def welcome():
     ## """List all available routes."""
    "<h1>Welcome to SHOWWW!</h1>"
    "<p>What are you looking for?!</p>"
    "<p>-----------------------------------</p>"
    "<p>a></p>"

@app.route('/')
def index():
    conn = create_connection()
    cur = conn.cursor()

    cur.execute('SELECT * FROM events')
    rows = cur.fetchall()

    cur.close()
    conn.close()

    # Convert the rows to a list of dictionaries
    data = []
    for row in rows:
        data.append({
            'event_id': row[0],
            'event_name': row[1],
            'venue_id': row[2],
            # Add more columns as needed
        })

    return jsonify(data)

# Run the application
if __name__ == '__main__':
    app.run()