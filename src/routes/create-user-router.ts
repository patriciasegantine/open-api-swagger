import type { FastifyPluginAsync } from 'fastify';

export const createUsersRoute: FastifyPluginAsync = async (app) => {
  app.post('/users',  {
    schema: {
      description: 'Create user',
      security: [
        { bearerAuth: []}
      ],
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
        },
        
        400: {
          description: 'Validation error!',
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                required: ['message', 'name'],
                properties: {
                  name: {
                    type: 'string',
                  },
                  error: {
                    type: 'string',
                  },
                },
              },
            }
          },
        },
        
        409: {
          description: 'User email already exists!',
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
          },
        },
      },
    },
  }, () => {
    return { userId: 'a3bb189e-8bf9-3888-9912-ace4e6543002' };
  })
}

export default createUsersRoute;
