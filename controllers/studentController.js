// import firebase from './../db'
// import Student from './../models/student'
// import firestore from firebase.firestore()
const firebase = require('./../db')
const Student = require('./../models/student')
const firestore = firebase.firestore()

const addStudent = async (req, res, next) => {
  try {
    const data = req.body
    await firestore.collection('students').doc().set(data)
    res.send('Record saved succesfully')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = { addStudent }
