const { MongoClient } = require('mongodb');
const keys = require('../config/keys');

const USER = encodeURIComponent(keys.dbUser);
const PASSWORD = encodeURIComponent(keys.dbPassword);
const DB_NAME = keys.dbName;

const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${keys.dbHost}:${keys.dbPort}/?authSource=${DB_NAME}`; // prettier-ignore

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    this.dbName = DB_NAME;
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.client.connect(error => {
        if (error) {
          reject(error);
        }

        console.log('Connected succesfully to mongo');
        resolve(this.client.db(this.dbName));
      });
    });
  }

  getAll(collection, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find(query)
        .toArray();
    });
  }
}

module.exports = MongoLib;