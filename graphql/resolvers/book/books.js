const BookModel = require("../../../models/Book");
const AuthorModel = require("../../../models/Author");

const books = (parent, args, context, info) => {
	let data = new BookModel().findAll();
	let authors = new AuthorModel().findAll();

	data = data.map((book) => {
		author = authors.find((author) => author.id === book.authorId);
		return { ...book, author };
	});

	return data;
};

module.exports = books;
