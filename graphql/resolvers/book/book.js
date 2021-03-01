const Book = async (book, args, context, info) => {
	const { db, requiresAuth } = await context(); // get methods from context
	const permission = "get:books"; // required permission to access this endpoint
	await requiresAuth(permission);

	let data = new db.BookModel().findOne("isbn", args.isbn);
	return data;
};

module.exports = Book;
