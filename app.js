//app.js
App({
  globalData: {
    hasUserInfo: false,
    userInfo: null,
    appData: null
  },

  onLaunch: function () {
    var self = this;

    // 登录
    wx.login({
      success: res => {
        wx.getUserInfo({
          success: res => {
            self.globalData.userInfo = res.userInfo;
          },
          fail: res => {
            wx.showToast({
              title: 'LogIn Error!',
              duration: 2000
            })
          }
        })
      }
    })


  }
})