const { graphqlHTTP: expressGraphQl } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const allTypes = require("./types"); // All Exported Types
const allQueries = require("./queries"); // All Exported Queries
const allMutation = require("./mutations"); // All Exported Mutations
const resolvers = require("./resolvers"); // All Exported Resolvers

const schema = makeExecutableSchema({
	typeDefs: `${allQueries} ${allMutation} ${allTypes}`,
	resolvers,
});

const expressGraphQLMiddleware = expressGraphQl({
	schema: schema, // Build schema
	graphiql: true,
});

module.exports = expressGraphQLMiddleware; //Exporting graphQl method
