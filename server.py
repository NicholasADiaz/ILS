from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:busyFoo+42@100.109.159.74:3306/ILS'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = 'secret string'

db = SQLAlchemy(app)


class Books(db.Model):
    __tablename__ = 'books'
    isbn = db.Column(db.String(100), primary_key=True)
    title = db.Column(db.String(250), nullable=False)
    publication_date = db.Column(db.Date, nullable=False)
    acquisition_date = db.Column(db.Date, nullable=False)
    acquisition_price = db.Column(db.Integer, nullable=False)
    times_borrowed = db.Column(db.Integer, nullable=False)
    page_count = db.Column(db.Integer, nullable=False)
    restricted = db.Column(db.Integer, nullable=False)
    copies = db.Column(db.Integer, nullable=False)


@app.route('/', methods=['GET', 'POST'])
def index():
    books = Books.query.all()
    return jsonify([(b.isbn, b.title, b.publication_date, b.acquisition_date, b.acquisition_price, b.times_borrowed,
                     b.page_count, b.restricted,
                     b.copies) for b in books])


@app.route("/get-books", methods=['GET', 'POST'])
def get_books():
    books = Books.query.all()
    return jsonify([(b.isbn, b.title, b.publication_date, b.acquisition_date, b.acquisition_price, b.times_borrowed,
                     b.page_count, b.restricted,
                     b.copies) for b in books])


if __name__ == "__main__":
    app.run(debug=True)
