// import firebase from "firebase";
// import config from './config'
const firebase = require('firebase')
const config = require('./config')

const db = firebase.initializeApp(config.firebaseConfig)

module.exports = db
