const authors = async (parent, args, context, info) => {
	const { db, requiresAuth } = await context(); // get methods from context
	const permission = "get:authors"; // required permission to access this endpoint
	await requiresAuth(permission);

	let data = new db.AuthorModel().findAll();
	return data;
};

module.exports = authors;
