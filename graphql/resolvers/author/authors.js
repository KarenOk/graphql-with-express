const { RequestError, errorTypes } = require("../../../errorHandler");

const authors = async (parent, args, context, info) => {
	const permission = "get:authors"; // required permission to access this endpoint

	const { db, token, isTokenValid } = await context(); // get methods from context

	/* 
		Check that token is valid. 
		This promise returns an error if invalid and a decoded jwt if valid.
		Valid tokens will have permissions 
	*/
	const { error, decoded } = await isTokenValid(token);

	if (error) {
		throw new RequestError(error, errorTypes.UNAUTHORIZED);
	}

	const permitted = decoded?.permissions.includes(permission); // check that the user is permitted to access this endpoint

	if (!permitted) {
		throw new RequestError("Permission not found", errorTypes.FORBIDDEN);
	}

	let data = new db.AuthorModel().findAll();
	return data;
};

module.exports = authors;
