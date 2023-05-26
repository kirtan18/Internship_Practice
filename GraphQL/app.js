const graphql = require("graphql");
const express = require("express");
const expressGraphQL = require('express-graphql').graphqlHTTP;
const { GraphQLSchema } = graphql;
const { query } = require('./users/users.query');
const { mutation } = require('./users/users.mutation')

const app = express();
const PORT = 7000;

const schema = new GraphQLSchema({
    query,
    mutation
  });

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () =>
  console.log(`GraphQL server running on localhost:${PORT}`)
);