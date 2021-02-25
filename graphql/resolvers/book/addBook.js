const BookModel = require("../../../models/Book");

const addBook = (parent, args, context, info) => {
	const book = {
		isbn: args.isbn,
		title: args.title,
		subtitle: args.subtitle,
		authorId: args.authorId,
		published: args.published,
		publisher: args.publisher,
		pages: args.pages,
		description: args.description,
		website: args.website,
	};
	new BookModel().add(book);
	return book;
};

module.exports = addBook;
