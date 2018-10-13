const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const { importSchema } = require('graphql-import')

const getUser = require('./queries/user')

const overall = importSchema('schemas.graphql')
const schema = buildSchema(overall)

const root = {
  users: getUser
}


const app = express()
app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: root, 
  graphiql: true,
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/api'))
