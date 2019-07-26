var app = tcb.init({
    env: 'moxigan'
  })

var auth = tcb.auth({persistence: 'session'})
auth.weixinAuthProvider({
    appid: 'wx8b0f73bdf6343e00',  //微信应用appid
    scope: 'snsapi_base'     //网页授权类型
}).signIn()
.then(res=> app.callFunction({ name: 'test', data: { hello: 'world' }}))
.then(console.log)
.catch(console.error);
