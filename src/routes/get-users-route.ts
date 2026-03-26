import type { FastifyPluginAsync } from 'fastify';

export const getUsersRoute: FastifyPluginAsync = async (app) => {
  app.get('/users',  {
    schema: {
      description: 'Get a list of users',
      querystring: {
        type: 'object',
        properties: {
          page: { type: 'integer', minimum: 1, default: 1 },
          pageSize: { type: 'integer', minimum: 1, default: 10 },
        },
        required: ['page', 'pageSize'],
      },
      tags: ['Users'],
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            total: { type: 'integer' },
            page: { type: 'integer' },
            pageSize: { type: 'integer' },
            data: {
              type: 'array',
              items: {
                type: 'object',
                required: ['id', 'name', 'email'],
                examples: [
                  {
                    id: 'a3bb189e-8bf9-3888-9912-ace4e6543002',
                    name: 'Alice',
                    email: 'alice@example.com',
                  }
                ],
                properties: {
                  id: {
                    type: 'string',
                    format: 'uuid'
                  },
                  name: {
                    type: ['string'],
                    maxLength: 100,
                  },
                  email: {
                    type: 'string',
                    format: 'email'},
                },
              }},
          },
        },
      },
    },
  }, () => {
    // Mock data for demonstration purposes
    const users = [
      { id: 'a3bb189e-8bf9-3888-9912-ace4e6543002', name: 'Alice', email: 'alice@example.com' },
      { id: 'b5c2290f-9cfa-4999-aa23-bdf5f7654113', name: 'Bob', email: 'bob@example.com' },
      { id: 'c7d3391a-0dfb-5aaa-bb34-cef6f8765224', name: 'Charlie', email: 'charlie@example.com' },
    ];
    return {
      total: users.length,
      page: 1,
      pageSize: 10,
      data: users
    };
  })
}

export default getUsersRoute;
