import { Type } from '@sinclair/typebox';
import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';

export const createUsersRoute: FastifyPluginAsyncTypebox = async (app) => {
  app.post('/users', {
    schema: {
      description: 'Create user',
      tags: ['Users'],
      security: [{ bearerAuth: [] }],
      body: Type.Object({
        name: Type.String({ maxLength: 100 }),
        email: Type.String({ format: 'email' }),
      }, {
        examples: [{ name: 'Alice', email: 'alice@example.com' }],
      }),
      response: {
        201: Type.Object({
          userId: Type.String({ format: 'uuid', description: 'The ID of the created user' }),
        }, { description: 'User created!' }),
        400: Type.Object({
          errors: Type.Array(
            Type.Object({
              name: Type.String(),
              error: Type.Optional(Type.String()),
            })
          ),
        }, { description: 'Validation error!' }),
        409: Type.Object({
          message: Type.String(),
        }, { description: 'User email already exists!' }),
      },
    },
  }, () => {
    return { userId: 'a3bb189e-8bf9-3888-9912-ace4e6543002' };
  });
};

export default createUsersRoute;
