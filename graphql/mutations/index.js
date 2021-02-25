const userMutations = require("./user");

const allMutations = `
   type Mutation {
       ${userMutations}
   }
`;
module.exports = allMutations;
