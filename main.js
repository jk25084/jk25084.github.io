app.callFunction({
  // 云函数名称
  name: 'test',
  // 传给云函数的参数
  data: {
    a: 1
  },
})
.then(res => {
  console.log(res)
})
.catch(error)
