const { graphqlHTTP: expressGraphQl } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const allTypes = require("./types"); // All Exported Types
const allQueries = require("./queries"); // All Exported Queries
const allMutation = require("./mutations"); // All Exported Mutations
const resolvers = require("./resolvers"); // All Exported Resolvers

const AuthorModel = require("../models/Author");
const BookModel = require("../models/Book");

const isTokenValid = require("../validate");

const { RequestError, errorCodes, errorTypes } = require("../errorHandler");

const context = async (req) => {
	const { authorization: token } = req.headers;
	const db = {
		AuthorModel,
		BookModel,
	};

	const requiresAuth = async (permission = "") => {
		/* 
			Check that user's token is valid and they have the permission to perform an action. 
			This function throws an error otherwise.
		*/
		const { error, decoded } = await isTokenValid(token);
		if (error) {
			throw new RequestError(error, errorTypes.UNAUTHORIZED);
		}

		if (permission) {
			const permitted = decoded?.permissions.includes(permission); // check that the user is permitted to access this endpoint
			if (!permitted) {
				throw new RequestError("Permission not found", errorTypes.FORBIDDEN);
			}
		}
	};

	return { db, requiresAuth };
};

const schema = makeExecutableSchema({
	typeDefs: `${allQueries} ${allMutation} ${allTypes}`,
	resolvers,
});

const expressGraphQLMiddleware = expressGraphQl(async (req) => ({
	schema: schema, // Build schema
	graphiql: true,
	context: () => context(req),
	customFormatErrorFn: (err) => {
		const {
			message,
			originalError: { type = errorTypes.INTERNAL_SERVER_ERROR },
		} = err;
		const statusCode = errorCodes[type];
		return {
			message,
			statusCode,
		};
	},
}));

module.exports = expressGraphQLMiddleware; //Exporting graphQl method
