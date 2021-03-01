const books = async (parent, args, context, info) => {
	const { db, requiresAuth } = await context(); // get methods from context
	const permission = "get:books"; // required permission to access this endpoint
	await requiresAuth(permission);

	let data = new db.BookModel().findAll();
	let authors = new db.AuthorModel().findAll();

	data = data.map((book) => {
		author = authors.find((author) => author.id === book.authorId);
		return { ...book, author };
	});

	return data;
};

module.exports = books;
