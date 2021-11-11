const express = require("express")
const app = express()

let persons =
	[
		{
			"name": "Arto Hellas",
			"number": "040-124512",
			"id": 1
		},
		{
			"name": "Ada Lovelace",
			"number": "23-42-3241214834",
			"id": 2
		},
		{
			"name": "Dominic Khan",
			"number": "39-44-125123",
			"id": 3
		},
		{
			"name": "Mary Poppendieck",
			"number": "39-23-6423122",
			"id": 4
		}
	]

const PORT = 3001
app.listen(PORT)
console.log(`Backend running on port ${PORT}`)