const bookTypes = require("./book"),
	authorTypes = require("./author");

const allTypes = `
    ${bookTypes}
    ${authorTypes}
`;

module.exports = allTypes;
