const bookQueries = require("./book"),
	authorQueries = require("./author");

const allQueries = `
    type Query {
        ${bookQueries}
        ${authorQueries}
    }
`;

module.exports = allQueries;
