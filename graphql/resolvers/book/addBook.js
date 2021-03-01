const addBook = async (parent, args, context, info) => {
	const { db, requiresAuth } = await context(); // get methods from context
	const permission = "create:book"; // required permission to access this endpoint
	await requiresAuth(permission);

	const book = {
		isbn: args.input.isbn,
		title: args.input.title,
		subtitle: args.input.subtitle,
		authorId: args.input.authorId,
		published: args.input.published,
		publisher: args.input.publisher,
		pages: args.input.pages,
		description: args.input.description,
		website: args.input.website,
	};
	new db.BookModel().add(book);
	console.log(book);
	return book;
};

module.exports = addBook;
