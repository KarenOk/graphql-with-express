const userQueries = require("./user");

const allQueries = `
   type Query {
       ${userQueries}
   }
`;
module.exports = allQueries;
