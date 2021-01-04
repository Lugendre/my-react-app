import * as path from 'path';
import { makeSchema } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import * as types from './types';

const schema = makeSchema({
  types,
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    schema: path.join(__dirname, './generated/schema.gen.graphql'),
    typegen: path.join(__dirname, './generated/apiTypes.gen.ts'),
  },
});

export default schema;
