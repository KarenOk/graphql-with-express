const { graphqlHTTP: expressGraphQl } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const allTypes = require("./types"); // All Exported Types
const allQueries = require("./queries"); // All Exported Queries
const allMutation = require("./mutations"); // All Exported Mutations
const resolvers = require("./resolvers"); // All Exported Resolvers

const AuthorModel = require("../models/Author");
const BookModel = require("../models/Book");

const isTokenValid = require("../validate");

const context = async (req) => {
	const db = {
		AuthorModel,
		BookModel,
	};
	const { authorization: token } = req.headers;

	return { db, token, isTokenValid };
};

const schema = makeExecutableSchema({
	typeDefs: `${allQueries} ${allMutation} ${allTypes}`,
	resolvers,
});

const expressGraphQLMiddleware = expressGraphQl(async (req) => ({
	schema: schema, // Build schema
	graphiql: true,
	context: () => context(req),
}));

module.exports = expressGraphQLMiddleware; //Exporting graphQl method
