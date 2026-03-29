import { Type } from '@sinclair/typebox';
import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';

const UserSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
  name: Type.String({ maxLength: 100 }),
  email: Type.String({ format: 'email' }),
});

export const getUsersRoute: FastifyPluginAsyncTypebox = async (app) => {
  app.get('/users', {
    schema: {
      description: 'Get a list of users',
      tags: ['Users'],
      querystring: Type.Object({
        page: Type.Integer({ minimum: 1, default: 1 }),
        pageSize: Type.Integer({ minimum: 1, default: 10 }),
      }),
      response: {
        200: Type.Object({
          total: Type.Integer(),
          page: Type.Integer(),
          pageSize: Type.Integer(),
          data: Type.Array(UserSchema),
        }, { description: 'Successful response' }),
      },
    },
  }, (request) => {
    const { page, pageSize } = request.query;
    
    const users = [
      { id: 'a3bb189e-8bf9-3888-9912-ace4e6543002', name: 'Alice', email: 'alice@example.com' },
      { id: 'b5c2290f-9cfa-4999-aa23-bdf5f7654113', name: 'Bob', email: 'bob@example.com' },
      { id: 'c7d3391a-0dfb-5aaa-bb34-cef6f8765224', name: 'Charlie', email: 'charlie@example.com' },
    ];
    
    return { total: users.length, page, pageSize, data: users };
  });
};

export default getUsersRoute;
