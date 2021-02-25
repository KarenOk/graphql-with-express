const AuthorModel = require("../../../models/Author");

const authors = (parent, args, context, info) => {
	let data = new AuthorModel().findAll();
	return data;
};

module.exports = authors;
