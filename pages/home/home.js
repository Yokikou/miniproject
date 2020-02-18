// pages/home/home.js
Page({
  data: {
    name:'zhangsan',
    student:[
      {name:'zhangsan',age:18},
      {name:'lisi',age:38}
    ],
    count:0
  },
  addSum(){
    this.setData({
      count:this.data.count+1
    })
  },
  subSum() {
    this.setData({
      count:this.data.count -1
    })
  }
})