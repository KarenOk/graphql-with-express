const BookModel = require("../../../models/Book");

const books = (author, args, context, info) => {
	let data = new BookModel().findAll();
	data = data.filter((book) => book.authorId === author.id);
	return data;
};

module.exports = books;
