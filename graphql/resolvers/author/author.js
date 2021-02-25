const AuthorModel = require("../../../models/Author");

const author = (parent, args, context, info) => {
	let data = new AuthorModel().findOne("id", args.id);
	return data;
};

module.exports = author;
