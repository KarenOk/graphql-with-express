const AuthorModel = require("../../../models/Author");

const author = (book, args, context, info) => {
	let data = new AuthorModel().findOne("id", book.authorId);
	return data;
};

module.exports = author;
