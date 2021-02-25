const BookType = `
    type BookType {
        isbn: String!
        title: String!
        subtitle: String!
        published: String!
        publisher: String!
        pages: Int!
        description: String!
        website: String!
        author: AuthorType
    }
`;

module.exports = BookType;
