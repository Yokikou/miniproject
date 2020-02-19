// componentns/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title:{
    //   type:String,
    //   value:'我是标题',
    //   observer:function(newval,oldval){
    //     console.log(newval,oldval);
    //   }
    // }

  },
  // externalClasses:["titleclass"],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addit(){
      // console.log('----');
      this.triggerEvent("addone",1,{});
    }

  }
})
