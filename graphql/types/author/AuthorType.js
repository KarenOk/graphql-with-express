const AuthorType = `
    type AuthorType {
        id: Int!,
		name: String!,
		books: [BookType]
    }
`;

module.exports = AuthorType;
