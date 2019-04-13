var toast = {
  success:function(title,duration){
    wx.showToast({
      title: title,
      icon: "success",
      duration: duration ? duration : 1500
    });
  },
  loading:(title,duration)=>{
    wx.showToast({
      title: title,
      icon:"loading",
      duration: duration ? duration :1500
    });
  },
  none:(title,duration)=>{
    wx.showToast({
      title: title,
      icon: "none",
      duration: duration ? duration : 1500
    });
  }
};

module.exports = toast;