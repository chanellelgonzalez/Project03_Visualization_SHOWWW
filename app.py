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
from flask_cors import cross_origin

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
        database='Project_3',
        user='postgres',
        password='postgres'
    )
    return conn

#################################################
# Root endpoint
#################################################
@app.route('/')
@cross_origin()
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
            'genre_id': row[7],
            # Add more columns as needed
        })
    return jsonify(data)

@app.route('/venues')
@cross_origin()
def venue():
    conn = create_connection()
    cur = conn.cursor()

    cur.execute('SELECT * FROM venues')
    rows = cur.fetchall()

    cur.close()
    conn.close()

    # Convert the rows to a list of dictionaries
    data = []
    for row in rows:
        data.append({
            'venue_id': row[0],
            'venue_name': row[1],
            'postalCode': row[2],
            'City' : row[3],
            'address' : row[5],
            'latitude' : row[6],
            'longtitude' : row[7],
            # Add more columns as needed
        })
    return jsonify(data)

@app.route('/genres')
@cross_origin()
def genre():
    conn = create_connection()
    cur = conn.cursor()

    cur.execute('SELECT * FROM genre')
    rows = cur.fetchall()

    cur.close()
    conn.close()

    # Convert the rows to a list of dictionaries
    data = []
    for row in rows:
        data.append({
            'subgenre_id': row[0],
            'subgenre': row[1],
            'genre_id': row[2],
            'genre_name' : row[3],
            # Add more columns as needed
        })
    return jsonify(data)

@app.route('/getAll')
@cross_origin()
def getAll():
    conn = create_connection()
    cur = conn.cursor()

    cur.execute('SELECT * FROM genre')
    rows = cur.fetchall()

    cur.close()
    conn.close()

    # Convert the rows to a list of dictionaries
    data = []
    for row in rows:
        data.append({
            'subgenre_id': row[0],
            'subgenre': row[1],
            'genre_id': row[2],
            'genre_name' : row[3],
            # Add more columns as needed
        })
    return jsonify(data)

    # return "Hello world"

# @app.after_request
# def add_cors_headers(response):
#     response.headers['Acess-Control-Allow-Origin'] = '*'
#     response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
#     return response


# Run the application
if __name__ == '__main__':
   app.run(debug = True)