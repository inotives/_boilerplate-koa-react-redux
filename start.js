/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
"use strict";

const koa = require('koa');
const app = new koa();
const koaStatic = require('koa-static');
const koaLog = require('koa-log');


const port = 3000;
// with koa-log
app.use(koaLog('short'));

// serving static folder
app.use(koaStatic('./public'));

// some other extension

app.listen( port , () => {
  console.log('App is Listening on port '+port)
});

