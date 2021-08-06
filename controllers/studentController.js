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

const getAllStudent = async (req, res, next) => {
  try {
    const data = await firestore.collection('students').get()
    const studentArr = []
    data.empty
      ? res.status(404).send('No student record found')
      : data.forEach((doc) => {
          const student = new Student(
            doc.id,
            doc.data().firstName,
            doc.data().lastName,
            doc.data().phoneNumber,
            doc.data().status,
            doc.data().subject,
            doc.data().year
          )
          studentArr.push(student)
        })
    res.send(studentArr)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const getStudent = async (req, res, next) => {
  try {
    const id = req.params.id
    const student = await firestore.collection('students').doc(id).get()
    !student.exists
      ? res.status(400).send('Student with the given id not found')
      : res.send(student.data())
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const updateStudent = async (req, res, next) => {
  try {
    const id = req.params.id
    const dataChange = req.body
    await firestore.collection('students').doc(id).update(dataChange)
    res.send('Student record updated successfully')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const deleteStudent = async (req, res, next) => {
  try {
    const id = req.params.id
    const student = await firestore.collection('students').doc(id)
    const studentFound = await student.get()
    const studentDeleted = await student.delete()
    !studentFound.exists
      ? res.status(400).send('Student with the given id not found')
      : studentDeleted
    res.send('Record student deleted successfully')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = { addStudent, getAllStudent, getStudent, updateStudent, deleteStudent }
