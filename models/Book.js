const books = require("../database/books");

class BookModel {
	constructor() {
		this.books = books;
	}

	add(book) {
		books.push(book);
		return book;
	}

	findAll() {
		return this.books;
	}

	findOne(property, value) {
		return this.books.find((book) => book[property] === value);
	}
}

module.exports = BookModel;
