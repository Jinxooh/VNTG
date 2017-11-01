const Router = require('koa-router');

const router = new Router();

router.post('/login/:provider', (ctx, next) => {
  console.log(ctx.request.body);
  console.log(ctx.request.body.something);
  ctx.body = {
    provider: ctx.params.provider,
    jeckson: 'oheelo',
  };
});

module.exports = router;

