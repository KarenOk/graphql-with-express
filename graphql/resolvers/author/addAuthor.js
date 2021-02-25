const AuthorModel = require("../../../models/Author");

const addAuthor = (parent, args, context, info) => {
	const authors = new AuthorModel();
	let author = { id: authors.authors.length + 1, name: args.input.name };
	new AuthorModel().add(author);
	return author;
};

module.exports = addAuthor;
