import common from "../../utils/common.js";
Page({
  data: {
    list: [
    ],
  },
  onLoad: function (e) {
    var that = this;
    //console.log(e);
    var id = e.id;
    common.toast.loading('加载中', 1000);
    common.curl.post("jd/products", { mid: id }, (res) => {
      console.log(res);
      that.setData({
        list: res.data.data.list
      });
    });
  },
})