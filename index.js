require("dotenv").config()
const { response } = require("express")
const express = require("express")
const morgan = require("morgan")
const app = express()
const cors = require("cors")
const Contacts = require("./models/contacts")

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

morgan.token("request-body", (req) => {
	return JSON.stringify(req.body)
})

app.use(morgan("tiny", {
	skip: (req, res) => { return req.method === "POST" }
}))
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :request-body", {
	skip: (req, res) => { return req.method !== "POST" }
}))

app.get("/", (req, res) => {
	res.send("<h1>Puhelinluettelo backend</h1>")
})

app.get("/info", (req, res) => {
	res.send(`<div>Phonebook has info for ${persons.length} people
	<p>${new Date()}</p>
	</div>`)
})

app.get("/api/persons", (req, res) => {
	Contacts.find({}).then(contacts => {
		res.json(contacts)
	})
})

app.get("/api/persons/:id", (req, res) => {
	Contacts.findById(req.params.id).then(contact => {
		res.json(contact)
	})
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
	}
	// else if (Contacts.find(contact => contact.name === body.name)) {
	// 	return res.status(403).json({
	// 		error: "name must be unique"
	// 	})
	// }

	const contact = new Contacts({
		name: body.name,
		number: body.number,
	})

	contact.save().then(savedContact => {
		res.json(savedContact)
	})
})

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Backend running on port ${PORT}`)
})