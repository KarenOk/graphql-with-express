const authors = require("../database/authors");

class AuthorModel {
	constructor() {
		this.authors = authors;
	}

	add(author) {
		authors.push(author);
		return author;
	}

	findAll() {
		return this.authors;
	}

	findOne(property, value) {
		return this.authors.find((author) => author[property] === value);
	}
}

module.exports = AuthorModel;
