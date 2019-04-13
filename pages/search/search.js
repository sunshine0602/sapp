import common from "../../utils/common.js";
Page({
  data:{
    value:'',
    valueInput:'',
    list: [
    ],
  },
  onLoad:function(options){
    this.setData({
      value:options.valueInput,
      valueInput:options.valueInput,
      })
  },
  //搜索框-------------------------------------------------
  inputBind: function (e) {
    valueInput = e.detail.value;
    //console.log(e);
  },
  //点击搜索按钮---------------------------------------------
  search: function (e) {
    console.log(e);
    var valueInput = e.detail.value;
    var keyword = e.valueInput;
    var that = this;
    if (valueInput == null) {
      common.toast.none('请输入要搜素的内容');
    } else {
      common.curl.post("jd/search", { keyword: keyword }, (res) => {
        //console.log(res);
        that.setData({
          list: res.data.data.data
        })
      })
    }
  },
  onLoad: function(e){
    var keyword=e.valueInput; 
    var that=this;
    common.curl.post("jd/search",{keyword:keyword},(res)=>{
      //console.log(res);
      that.setData({
         list:res.data.data.data
      })
    })
  }
  
})