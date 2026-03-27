import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import scalarUI from "@scalar/fastify-api-reference";
import getUsersRoute from "./routes/get-users-route.ts";
import createUsersRoute from "./routes/create-user-router.ts";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});


app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Open API Docs',
      version: '1.0.0',
    }
  }
});

app.register(createUsersRoute)
app.register(getUsersRoute)

app.get('/openapi.json', () => app.swagger());

app.register(scalarUI, {
  routePrefix: '/docs',
  configuration: {
    title: 'Open API Docs',
    description: 'API documentation for the application',
    version: '1.0.0',
    layout: 'modern',
    showExplorer: true,
    showSidebar: true,
  }
});

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
