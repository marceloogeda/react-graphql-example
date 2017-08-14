import express from 'express';
import bodyParser from 'body-parser';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import { addMockFunctionsToSchema } from 'graphql-tools';

import { schema } from './src/schema';

const PORT = 5000;
const server = express();

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));
