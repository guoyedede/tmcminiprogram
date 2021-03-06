// pages/user/checkin.js
const app = getApp();

Page({
  /**
   * Page initial data
   */
  data: {
    testUserName: "guoye",
    testMeetingName1: "IBM Dalian TMC 168th Meeting",
    testMeetingDate1: new Date().toLocaleDateString(),
    hasChecked: false,
    btnType: "primary"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const tempHasChecked = wx.getStorage("" + this.testMeetingName1);
    console.log(tempHasChecked);
    if (tempHasChecked) {
      this.setData({ hasChecked: true });
    }
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  clickCheckin: function(event) {
    const self = this;

    this.setData({ hasChecked: true });
    wx.setStorage({
      "key": "" + self.testMeetingName1,
      "data": self.hasChecked
      })
  }
})