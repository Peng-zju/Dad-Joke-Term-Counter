#!flask/Scripts/python
from flask import Flask, jsonify
import requests
import re
import collections
from flask_cors import CORS

app = Flask(__name__)

CORS(app, supports_credentials=True)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/api/jokes')
def create_jokes():
    # retrieve at least 10 jokes from api
    headers = {"Accept": "application/json"}
    joke_count = 0
    jokes = []
    while(joke_count < 10):
        res = requests.get('https://icanhazdadjoke.com/', headers=headers)
        res = res.json()
        if(res['status'] == 200):
            joke_count += 1
            jokes.append(res['joke'])

    #calculate word frequency
    cleanString = ""
    for s in jokes:
        cleanString += s
    cleanString = re.sub("[^A-Za-z0-9’']",' ', cleanString)
    c = collections.Counter(cleanString.split())
    nums = len(c.most_common())
    return_list = []
    for i in range(nums):
        return_list.append(
          {
              "rank": i+1,
              "term": c.most_common()[i][0],
              "count": c.most_common()[i][1]
          }
        )

    #send back response
    return jsonify(return_list)

if __name__ == '__main__':
    app.run(debug=True)