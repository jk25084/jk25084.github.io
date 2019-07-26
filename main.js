var app = tcb.init({
    env: 'moxigan'
  })

app.callFunction({ name: 'access', data: { hello: 'world' }, function(err, res) {
if(res)console.log(res);if(err)console.error(err);
}};
