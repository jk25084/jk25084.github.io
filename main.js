var app = tcb.init({
    env: 'moxigan'
  })

app.callFunction({ name: 'access', data: { }})
.catch(console.error);
