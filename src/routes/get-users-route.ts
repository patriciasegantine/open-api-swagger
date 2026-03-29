import { Type } from '@sinclair/typebox';
import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { UserSchema } from "../schemas/user_schema.ts";
import { users } from "../data/users.ts";

export const getUsersRoute: FastifyPluginAsyncTypebox = async (app) => {
  app.get('/users', {
    schema: {
      description: 'Get a list of users.ts',
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
    
    return { total: users?.length, page, pageSize, data: users };
  });
};

export default getUsersRoute;
