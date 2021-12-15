const mongoose = require('mongoose')

if (process.argv.length < 3) {
	console.log('give password as an argument')
	process.exit(1)
}

const password = process.argv[2]

const url =
	`mongodb+srv://pekoni111:${password}@cluster0.oi6mh.mongodb.net/phonebook-app?retryWrites=true`

mongoose.connect(url)

const contactSchema = new mongoose.Schema({
	name: String,
	number: String,
})

const Contact = mongoose.model('Contact', contactSchema)

// If adding a new contact, else print existing ones
if (process.argv[3]) {
	const newName = process.argv[3]
	const newNumber = process.argv[4]

	// Creating a new contact
	const contact = new Contact({
		name: newName,
		number: newNumber,
	})

	contact.save().then(r => {
		console.log(`Added ${newName} number ${newNumber} to phonebook`)
		mongoose.connection.close()
	}).catch(e => {
		console.log("error:", e);
	})
} else {
	// Fetching contacts from the db
	Contact.find({}).then(result => {
		if (result.length > 0) {
			result.forEach(c => {
				console.log(c.name, c.number);
			})
		} else {
			console.log("No contacts on the phonebook yet.");
		}
		mongoose.connection.close()
	})
}









