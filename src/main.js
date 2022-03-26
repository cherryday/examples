import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err, address);
    process.exit(1);
  }
});
