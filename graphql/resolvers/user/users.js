let users = (root, args, context, info) => {
	return new Promise((resolve) => {
		// any Data that come form DB
		const data = [
			{
				id: 1,
				username: "geekstrick",
				email: "info@geekstrick.com",
				mobile: "9893XX-XXXX",
				role: "Admin",
				isActive: "0",
			},
			{
				id: 2,
				username: "geekstrick-dummy",
				email: "info@geekstrick-dummy.com",
				mobile: "9893XX-XXXX",
				role: "Non-Admin",
				isActive: "1",
			},
		];
		resolve(data);
	});
};
module.exports = users;
