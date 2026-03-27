import type { FastifyPluginAsync } from 'fastify';

export const createUsersRoute: FastifyPluginAsync = async (app) => {
  app.post('/users',  {
    schema: {
      description: 'Create user',
      body: {
        type: 'object',
        examples:[
          {
            name: 'Alice',
            email: 'alice@example.com',
          }],
          properties: {
            name: {
              type: ['string'],
              maxLength: 100,
            },
            email: {
              type: 'string',
              format: 'email'},
          },
        required: ['name', 'email'],
      },
      tags: ['Users'],
      response: {
        201: {
          description: 'User created!',
          type: 'object',
          properties: {
            userId: {
              type: 'string',
              format: 'uuid',
              description: 'The ID of the created user',
            }
          },
        }
      },
    },
  }, () => {
    return { userId: 'a3bb189e-8bf9-3888-9912-ace4e6543002' };
  })
}

export default createUsersRoute;
