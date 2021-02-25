const BookInput = `
    input BookInput {
        isbn: String!
        title: String!
        subtitle: String!
        authorId: Int!
        published: String!
        publisher: String!
        pages: Int!
        description: String!
        website: String!
    }
`;

module.exports = BookInput;
