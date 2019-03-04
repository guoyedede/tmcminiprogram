//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isOfficer: false
  },

  onLoad: function () {
    //officer id
    this.setData({isOfficer: true});
  }
})
