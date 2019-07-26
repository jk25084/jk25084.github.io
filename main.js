var app = tcb.init({
    env: 'moxigan'
  })

var auth = tcb.auth({persistence: 'session'})
auth.weixinAuthProvider({
    appid: 'wx8b0f73bdf6343e00',
    scope: 'snsapi_base'
}).signIn()
.then(res=> app.callFunction({ name: 'access', data: { }}))
.catch(console.error);
