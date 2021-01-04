module.exports = {
  client: {
    name: 'client',
    tagName: 'gql',
    addTypename: true,
    service: {
      name: 'server',
      localSchemaFile:
        '/home/node/workspace/packages/server/src/generated/schema.gen.graphql',
    },
  },
};
