var app = tcb.init({
    env: 'moxigan'
  })

app.callFunction({
  // 云函数名称
  name: 'access',
  // 传给云函数的参数
  data: {
    a: 1
  },
})
.then(console.log)
.catch(console.error)
