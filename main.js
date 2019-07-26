var app = tcb.init({
    env: 'moxigan'
  })

var auth = app.auth()
auth.weixinAuthProvider({
    appid: 'wx8b0f73bdf6343e00',  //微信应用appid
    scope: 'snsapi_base'     //网页授权类型
}).signIn((err, res) => {
if(res)console.log(res);if(err)console.error(err);
})

app.callFunction({ name: 'access', data: { hello: 'world' }, function(err, res) {
if(res)console.log(res);if(err)console.error(err);
}});
