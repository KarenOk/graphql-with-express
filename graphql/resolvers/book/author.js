const author = async (book, args, context, info) => {
	const { db, requiresAuth } = await context(); // get methods from context
	const permission = "get:author"; // required permission to access this endpoint
	await requiresAuth(permission);

	let data = new db.AuthorModel().findOne("id", book.authorId);
	return data;
};

module.exports = author;
