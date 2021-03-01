const addAuthor = async (parent, args, context, info) => {
	const { db, requiresAuth } = await context(); // get methods from context
	const permission = "create:author"; // required permission to access this endpoint
	await requiresAuth(permission);

	const authors = new db.AuthorModel();
	let author = { id: authors.authors.length + 1, name: args.input.name };
	authors.add(author);
	return author;
};

module.exports = addAuthor;
