import os, json
from flask import Flask, render_template, url_for, Response, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/get_data")
def get_data():
    data = open("static/json/data.json", "r")
    # with open("static/json/data.json", "r") as json_data:
    #     data = json.dumps(json_data)
    print("json_data = ", data)
    return Response(data)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
