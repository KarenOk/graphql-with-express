const users = require("./user/users"),
	addUser = require("./user/addUser");

// root resolvers
var resolvers = {
	users: users,
	addUser: addUser,
};
module.exports = resolvers;
