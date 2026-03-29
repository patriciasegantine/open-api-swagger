# OpenAI API Exploration with Fastify

---

A simple project built to explore the OpenAI API using Fastify, TypeScript, and OpenAPI documentation.

![Project preview](./assets/post-user.png)

> The idea was to keep the project intentionally small and use it as a practical way to experiment with the API, its responses, and the overall developer experience.

---

## Stack

- Node.js
- TypeScript
- Fastify
- @fastify/swagger
- @scalar/fastify-api-reference
- @fastify/cors

## What’s included

- Fastify server
- OpenAPI schema generation
- Interactive API documentation with Scalar
- CORS support
- Sample `/users` endpoint
- Base structure for OpenAI API integration

## Getting started

Install dependencies:

```bash
npm install
```
Run the development server:

```bash
npm run dev
```
The app runs at:

```plaintext
http://localhost:3333
```

## API documentation

OpenAPI JSON:
```plaintext
http://localhost:3333/openapi.json
```
Interactive docs:
```plaintext
http://localhost:3333/docs
```
## Example endpoint

GET /users

Returns a mock list of users with pagination metadata.

Query parameters
- page
- pageSize

### Example response

```json
{
  "total": 1,
  "page": 1,
  "pageSize": 10,
  "data": [
    {
      "id": "a3bb189e-8bf9-3888-9912-ace4e6543002",
      "name": "Alice",
      "email": "alice@example.com"
    }
  ]
}
```

---
> ## Notes
>
> This project is intentionally simple. The goal was to explore the OpenAI API and experiment with a clean setup for documentation, validation, and future integration.


### Licence

ISC

---

## 👩‍💻 Author

Created by **Patricia Segantine**  
Senior Frontend Engineer | Exploring backend development

🔗 GitHub: [@patriciasegantine](https://github.com/patriciasegantine)  
🔗 LinkedIn: [Patricia Segantine](https://www.linkedin.com/in/patriciasegantine/)
