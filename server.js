const express = require("express");
const expressGraphQLMiddleware = require("./graphql");

const app = express();

app.use("/graphql", expressGraphQLMiddleware);

app.listen(5000, () => console.log("Server running..."));
