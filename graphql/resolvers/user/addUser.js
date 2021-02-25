let addUser = (root, args, context, info) => {
	// root contains all the input params
	return new Promise((resolve) => {
		const AddedData = {
			username: root.username,
			email: root.email,
			mobile: root.mobile,
			role: root.role,
		};
		resolve(AddedData); // Added Data in Response
	});
};
module.exports = addUser;
