const fastify = require('fastify')({ logger: true });

const PORT = 5000;

fastify.get('/items', (req, reply) => {
  reply.send({ test: 'Hello World!' });
});

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(erro);
    process.exit(1);
  }
};

start();
