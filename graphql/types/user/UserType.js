// The response data from Resolvers will match this model
const UserType = `
type UserType {
    id: Int
    username: String
    email: String
    mobile: String
    role: String
    isActive: String
  }`;

module.exports = UserType;
