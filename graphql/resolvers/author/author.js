const author = async (parent, args, context, info) => {
	const { db, requiresAuth } = await context(); // get methods from context
	const permission = "get:author"; // required permission to access this endpoint
	await requiresAuth(permission);

	let data = new db.AuthorModel().findOne("id", args.id);
	return data;
};

module.exports = author;
