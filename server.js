const express = require("express");

const app = express();

const graphQl = require("./graphql");

app.use("/graphql", graphQl);

app.listen(5000, () => {
	console.log("Server is runnnig on port " + 5000);
});
