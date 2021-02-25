const BookModel = require("../../../models/Book");

const Book = (book, args, context, info) => {
	let data = new BookModel().findOne("isbn", args.isbn);
	return data;
};

module.exports = Book;
