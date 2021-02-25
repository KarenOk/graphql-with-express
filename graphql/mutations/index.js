const bookMutations = require("./book"),
	authorMutations = require("./author");

const allMutations = `
    type Mutation {
        ${bookMutations}
        ${authorMutations}
    }
`;

module.exports = allMutations;
