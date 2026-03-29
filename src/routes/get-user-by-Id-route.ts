import { Type } from '@sinclair/typebox';
import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { UserSchema } from "../schemas/user_schema.ts";
import { users } from "../data/users.ts";

export const getUserByIdRoute: FastifyPluginAsyncTypebox = async (app) => {
  app.get('/users/:id', {
    schema: {
      description: 'Get a user by ID',
      tags: ['Users'],
      params: Type.Object({
        id: Type.String({ format: 'uuid' }),
      }),
      response: {
        200: UserSchema,
        404: Type.Object({
          message: Type.String(),
        }, { description: 'User not found!' }),
      },
    },
  }, async (request, reply) => {
    const { id } = request.params;
    
    const user = users?.find((u) => u.id === id);
    
    if (!user) {
      return reply.status(404).send({ message: 'User not found' });
    }
    
    return user;
  });
};

export default getUserByIdRoute;
