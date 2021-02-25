const bookQueries = `
    books: [BookType]
    book(isbn: String!): BookType
`;

module.exports = bookQueries;
