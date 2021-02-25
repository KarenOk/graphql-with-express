const author = require("./author");
const authors = require("./authors");
const books = require("./books");
const addAuthor = require("./addAuthor");

module.exports = {
	Query: {
		author,
		authors,
	},
	Mutation: {
		addAuthor,
	},
	AuthorType: {
		books,
	},
};
