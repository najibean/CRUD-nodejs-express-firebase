// import express from "express"
// import cors from "cors"
// import bodyParser from "body-parser"
// import config from "./config"
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())  /* apa alternative nya karena dia deprecated? */

app.listen(config.port, () => {
	console.log("App is listening from url http://localhost:" + config.port)
})

console.log(config);