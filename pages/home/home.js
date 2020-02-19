// pages/home/home.js
// Page({
//   data:{
    // imgPath:''
    // show:true
    // number:[1,2,3,4]
    // price:25.66666
    // fruits:['apple','banana','pear']
    // count:0
    // title:['html','js','css','java']

  // }
  // addcount(){
  //   const count_z=this.selectComponent('.my-sel');
  //   // console.log(count_z);
  //   // count_z.setData({
  //   //   count: count_z.data.count+1
  //   // })

  //   count_z.setcount(2);
  // }
  // showIt(event){
  //   console.log(event);
  // }
  // addIt(val){
  //   this.setData({
  //     count:this.data.count+val
  //   })
  // }
  // clickIt(event){
  //   // console.log(event)
  //   const data=event.target.dataset;
  //   const index=data.index;
  //   const item=data.item;
  //   console.log(index+"--"+item);
  // }
  // showCh(){
  //   this.setData({
  //     show:!this.data.show
  //   })
  // }
  // getUser(event){
  //   console.log(event)
  // },
  // chooicePic(){
  //   wx.chooseImage({
  //     success: (res)=> {
  //       const path=res.tempFilePaths[0];
  //       this.setData({
  //         imgPath:path
  //       })
  //     },
  //   })
  // },


  // data: {
  //   inputShowed: false,
  //   inputVal: ""
  // },
  // showInput: function () {
  //   this.setData({
  //     inputShowed: true
  //   });
  // },
  // hideInput: function () {
  //   this.setData({
  //     inputVal: "",
  //     inputShowed: false
  //   });
  // },
  // clearInput: function () {
  //   this.setData({
  //     inputVal: ""
  //   });
  // },
  // inputTyping: function (e) {
  //   this.setData({
  //     inputVal: e.detail.value
  //   });
  // }
  // onPageScroll(obj){
  //   console.log(obj)
  // },
  // onReachBottom(){
  //   console.log('error')
  // }

// })
// import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  showtoast(){
    // wx.showToast({
    //   title: '成功',
    //   icon: 'loading',
    //   duration: 2000
    // })

    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

    // wx.showLoading({
    //   title: '加载中',
    // })
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000)

    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data:{
    //     name:'yqg',
    //     age:21
    //   },
    //   success(res){
    //     console.log(res);
    //   }
    // })

    // request({
    //   url:'http://httpbin.org'
    // }).then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  //  return{
  //    title:'hello world!',
  //    imageUrl:'/assets/tabbar/home.png'
  //  }
    
  }
})