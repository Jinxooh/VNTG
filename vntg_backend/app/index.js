/* 모듈 불러오기 */
const Koa = require('koa');
// const serve = require('koa-static');
// const path = require('path');
// const mongo = require('koa-mongo');
const mongoose = require('mongoose');
const api = require('./api');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
// body-parser 적용
app.use(bodyParser());

const router = new Router();
router.use('/api', api.routes());
app.use(router.routes());

// db 연결
mongoose.connect('mongodb://localhost/vntg_db', { useMongoClient: true });
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
  console.log("Connected to mongod server");
})

// const Book = require('./models/book');
// const User = require('./models/user');

// const user = new User({
//   username: 'jinx2',
//   thumbnail: 'jinx2.png',
//   displayName: 'jinx hwang2',
//   description: '2222 jonna jjangjjang man',
//   email: 'cjswp122@gmail.com',
// });

// user.save((err, user)=> {
//   if(err) return console.error(err);
//   console.dir(user);
// });

app.use(async (ctx, next) => {
  ctx.body = 'hlllllll';
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});