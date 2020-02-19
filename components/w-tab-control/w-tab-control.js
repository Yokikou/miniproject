// components/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    }

  },
  externalClasses:["titlecolor"],

  /**
   * 组件的初始数据
   */
  data: {
    numberindex:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changecolor(event){
      // console.log(event);
      const index = event.currentTarget.dataset.index;
      this.setData({
        numberindex:index
      })
      this.triggerEvent("itemclick",{index,title:this.properties.title[index]},{})
    }

  }
})
