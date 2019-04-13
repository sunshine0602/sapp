import common from "../../utils/common.js";
var valueInput;
Page({
  data: {
    currentId:0,
    currentPage:1,
    imgUrls: [
    ],
    menus:[
    ],
    recommends:[
    ],
    list:[],
    indicatorDots:true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  onLoad: function (options) {
    var that = this;
    common.toast.loading('加载中',1000);
    common.curl.get("home/index",false,(res)=>{
        //console.log(res);
        //设置默认分类
        that.data.currentId = res.data.data.store.categorys[0]['id'];
        that.setData({
          imgUrls:res.data.data.scrolls,
          menus:res.data.data.menus,
          recommends:res.data.data.recommends.list,
          store:res.data.data.store.categorys,
          list: res.data.data.store.list,
        });
    });
  },
  //搜素框-------------------------------------------------
  inputBind:function(e){
    valueInput = e.detail.value;
    //console.log(e);
  },
  //点击搜素按钮---------------------------------------------
  search:function(e){
    if(valueInput == null){
      common.toast.none('请输入要搜素的内容');
    }else{
      wx.navigateTo({
        url: '/pages/search/search?valueInput=' + valueInput,
      })
    }
    //console.log(e);
  },
  //轮播      ----------------------------------------------
  luobo:function(e){
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
    })
  },

// 点击四个图标事件----------------------------
  icosId:function(e){
    var id = e.currentTarget.dataset.id;
    //console.log(id);
    wx.navigateTo({
      url: '/pages/icons/icons?id=' + id,
    })
  },

 category:function(e){
    //console.log(e);
    var id=e.currentTarget.dataset.id;
    var that=this;
    this.data.currentId = id;
    this.data.currentPage = 1;

    common.curl.post("jd/products",{mid:id}, (res) => {
      //console.log(res);
      that.setData({
        list: res.data.data.list
      });
    });
  },
  onReachBottom:function(){
    this.data.currentPage++;
    var id = this.data.currentId;
    var page = this.data.currentPage;
    //list是商品数组
    var list = this.data.list;
    var that = this;
    common.curl.post("jd/products", { 
      mid: id,
      page:page
      }, (res) => {
        if(res.data.data.list.length >0 ) {
            for(var k in res.data.data.list) {
              console.log(k);
              list.push(res.data.data.list[k]);  
            }
            that.setData({
              list: list
            });
        }
    });
  }
});