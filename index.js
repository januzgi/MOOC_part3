const { response } = require("express")
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

app.get("/info", (req, res) => {
	res.send(`<div>Phonebook has info for ${persons.length} people
	<p>${new Date()}</p>
	</div>`)
})

app.get("/api/persons", (req, res) => {
	res.json(persons)
})

app.get("/api/persons/:id", (req, res) => {
	const id = Number(req.params.id)
	const person = persons.find(p => p.id === id)
	if (person) {
		res.json(person)
	} else {
		res.status(404).end()
	}
})

app.delete("/api/persons/:id", (req, res) => {
	const id = Number(req.params.id)
	persons = persons.filter(p => p.id !== id)

	res.status(204).end()
	// testattu REST clientilla OK
})

app.post("/api/persons", (req, res) => {
	const body = req.body
	if (!body.name || !body.number) {
		return res.status(403).json({
			error: "no person details given"
		})
	} else if (persons.find(p => p.name === body.name)) {
		return res.status(403).json({
			error: "name must be unique"
		})
	}

	const person = {
		name: body.name,
		number: body.number,
		id: Math.floor(Math.random() * 100000)
	}
	persons = persons.concat(person)
	res.json(person)
})

const PORT = 3001
app.listen(PORT)
console.log(`Backend running on port ${PORT}`)
