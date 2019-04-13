var curl={
  domain:"https://sapp.51yijiadian.com/v1",
  get: (path, data, success, fail, header, dataType) => {
    wx.request({
      url:curl.domain+"/"+path,
      method:'GET',
      data:data ? data : {},
      dataType: dataType ? dataType : 'json',
      header:header ? header : {
        'content-type': 'application/json'
      },
      success:success,
      fail:fail ? fail : (error)=> {
        console.log(error);
      }
    });
  },
  post: (path, data, success, fail, header, dataType) => {
    wx.request({
      url: curl.domain + "/" + path,
      method: 'POST',
      data: data ? data : {},
      dataType: dataType ? dataType : 'json',
      header: header ? header : {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: success,
      fail: fail ? fail : (error) => {
        console.log(error);
      }
    });
  }
};

module.exports = curl;