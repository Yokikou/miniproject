//登入操作-----------------------------------------
//---------------------------------------------代码
// const TOKEN='token';
// App({
//   globalData:{
//     token:''
//   },
//   /**
//    * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
//    */
//   onLaunch: function () {
//     //先从缓存中取出token
//     const token = wx.getStorageSync(TOKEN);

//     //判断token是否有值
//     if(token || token.length!==0){
//       //验证token是否过期
//       this.checkToken(token);
//     }else{  //没有token，进行登录操作
//       this.login();
//     }
//   },
//   checkToken(token){
//     wx.request({
//       url: 'http://123.207.32.32:3000/auth',
//       method:'post',
//       header:{
//         token
//       },
//       success:(res)=>{
//         if(!res.data.errCode==undefined){
//           this.globalData.token=token
//         }
//       },
//       fail:(res)=>{
//         console.log(err)
//       }
//     })
//   },
//   login(){
//     //登录操作
//     wx.login({
//       success: (res) => {
//         // console.log(res)
//         //获取code
//         const code = res.code;
//         //将code发送给我们的服务器
//         wx.request({
//           url: 'http://123.207.32.32:3000/login',
//           method: 'post',
//           data: {
//             code
//           },
//           success: (res) => {
//             // console.log(res)
//             //取出token
//             const token = res.data.token;

//             //将token保存到globalData中
//             this.globalData.token = token;

//             //进行本地保存
//             wx.setStorageSync(TOKEN, token);
//           }
//         })
//       }
//     })
//   }
// })

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
