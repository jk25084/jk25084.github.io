var app = tcb.init({
    env: 'moxigan'
  })

app.callFunction({name: 'access',data: {a: 1}})
.then(console.log)
.catch(console.error)
