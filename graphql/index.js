const { graphqlHTTP: expressGraphQl } = require("express-graphql");
const { buildSchema } = require("graphql");
const allTypes = require("./types"); // All Exported Types
const allQueries = require("./queries"); // All Exported Queries
const allMutation = require("./mutations"); // All Exported Mutations
const resolvers = require("./resolvers"); // All Exported Resolvers

const schema = buildSchema(`${allQueries} ${allMutation} ${allTypes}`);

const expressGraphQLMiddleware = expressGraphQl({
	schema: schema, // Build schema
	rootValue: resolvers, // Resolvers
	graphiql: true,
});

module.exports = expressGraphQLMiddleware; //Exporting graphQl method
