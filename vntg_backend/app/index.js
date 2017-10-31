/* 모듈 불러오기 */
const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const app = new Koa();
const mongo = require('koa-mongo');
const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost/vntg_db');
console.log(db);
// app.use(serve(path.resolve(__dirname, '../build')));
// app.use(mongo());
// app.use(mongo({
//   host: 'localhost',
//   port: 27017,
//   db: 'vntg_db',
//   msc: 100,
//   min: 1
// }));
app.use(async (ctx, next) => {
  ctx.body = 'hlllllll';
})


// const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');
// const mongoose = require('mongoose');
// const api = require('./api');
// const app = new Koa();

// // body-parser 적용
// app.use(bodyParser());

// const router = new Router();
// // router.use('/api', api.routes());
// app.use(router.routes());

// const db = mongoose.connection;
// // db.on('error', console.error);
// // db.once('openUri', () => {
// //   console.log('Connected to mongod server');
// // });

// // const MONGODB_SEVER = 'mongodb://localhost/vntg_db'
// // mongoose.createConnection(MONGODB_SEVER);

app.listen(3000, () => {
  console.log('listening on port 3000');
});