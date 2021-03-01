const books = async (author, args, context, info) => {
	const { db, requiresAuth } = await context(); // get methods from context
	const permission = "get:books"; // required permission to access this endpoint
	await requiresAuth(permission);

	let data = new db.BookModel().findAll();
	data = data.filter((book) => book.authorId === author.id);
	return data;
};

module.exports = books;
