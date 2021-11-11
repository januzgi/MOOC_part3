const express = require("express")
const app = express()

app.use(express.json())

let persons =
	[
		{
			name: "Arto Hellas",
			number: "040-124512",
			id: 1
		},
		{
			name: "Ada Lovelace",
			number: "23-42-3241214834",
			id: 2
		},
		{
			name: "Dominic Khan",
			number: "39-44-125123",
			id: 3
		},
		{
			name: "Mary Poppendieck",
			number: "39-23-6423122",
			id: 4
		}
	]

app.get("/", (req, res) => {
	res.send("<h1>Puhelinluettelo backend</h1>")
})

app.get("/api/persons", (req, res) => {
	res.json(persons)
})

const PORT = 3001
app.listen(PORT)
console.log(`Backend running on port ${PORT}`)
