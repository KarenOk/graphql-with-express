const allResolvers = [require("./book"), require("./author")];

const result = {};

// Merge resolvers innto one
for (let resolver of allResolvers) {
	Object.keys(resolver).forEach((key) => {
		if (result[key]) {
			result[key] = { ...result[key], ...resolver[key] };
		} else {
			result[key] = resolver[key];
		}
	});
}

module.exports = result;
