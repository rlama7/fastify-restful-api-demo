const fastify = require('fastify')({ logger: true });

const PORT = 5000;

// import
const items = require('./Items');

fastify.get('/items', (req, reply) => {
  reply.send({ items });
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
