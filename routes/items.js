// import
const items = require('../Items');

function itemRoutes(fastify, options, done) {
  // GET ALL ITEM
  fastify.get('/items', (req, reply) => {
    reply.send({ items });
  });

  // GET A SINGLE ITEM
  fastify.get('/items/:id', (req, reply) => {
    const { id } = req.params;
    const item = items.find((item) => item.id === id);
    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
