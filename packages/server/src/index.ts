import { ApolloServer } from  'apollo-server';
import schema from  './schema';
import { createContext } from  './context';

const server = new ApolloServer({ schema, context: createContext });

server.listen().then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`);
});