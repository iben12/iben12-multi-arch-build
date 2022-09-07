const fastify = require("fastify")({ logger: true });

fastify.get("/", (request, reply) => {
  console.log(request.headers);
  reply.send({msg: "hello"})
})

fastify.listen({ host: "0.0.0.0", port: "8080"}, function (err, address) {
  console.log(`Listening on ${address}`);
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  process.on("SIGTERM", () => {
    console.log("Got SIGTERM");
    fastify.close().then(() => {
      console.log("Server closed");
      process.exit(0)
    })
    process.exit(0)
  })

  process.on("SIGINT", () => {
    console.log("Got SIGINT");
    fastify.close().then(() => {
      console.log("Server closed");
      process.exit(0)
    })
  })
})