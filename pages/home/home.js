// pages/home/home.js
Page({
  data: {
    title: 'hehehe'
  },
  clickTo(){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  }
})