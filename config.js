// import dotenv from "dotenv"
// import assert from "assert"
const dotenv = require('dotenv')
const assert = require('assert')

dotenv.config()

const {
	PORT,
	HOST,
	HOST_URL,
	API_KEY,
	AUTH_DOMAIN,
	PROJECT_ID,
	STORAGE_BUCKET,
	MESSAGING_SENDER,
	APP_ID
} = process.env

assert(PORT, "PORT is required")
assert(HOST, "HOST is required")

module.exports = {
	port: PORT,
	host: HOST,
	url: HOST_URL,
	firebaseConfig: {
		apiKey: API_KEY,
		authDomain: AUTH_DOMAIN,
		projectId: PROJECT_ID,
		storageBucket: STORAGE_BUCKET,
		messagingSender: MESSAGING_SENDER,
		appId: APP_ID
	}
}
