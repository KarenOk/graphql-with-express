const book = require("./book");
const books = require("./books");
const addBook = require("./addBook");
const author = require("./author");

module.exports = {
	Query: {
		book,
		books,
	},
	Mutation: {
		addBook,
	},
	BookType: {
		author,
	},
};
