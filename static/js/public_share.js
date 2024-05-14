(function(){
    if("micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)){
        if("share.gmw.cn"!=window.location.hostname){
            if(window.location.hostname == "gxy.health.gmw.cn"){
                window.location.href = window.location.href.replace(/http:\/\/gxy\.health\.gmw\.cn\//, "http://share.gmw.cn/gxyhealth/");
            }else{
                window.location.href=window.location.href.replace(/\/(\w+)\.gmw\.cn\//g, function(a,b){
                    var z={};
                    return a.replace(b,'share')+b+'/';
                });
            }
        }
        
        window.onload = function(){
            if(typeof require == "undefined"){

                    $.getScript("https://res.wx.qq.com/open/js/jweixin-1.6.0.js", function(){
                        var url = location.href.split('#')[0];
                        $.ajax({
                            url: window.location.protocol+"//jshare.gmw.cn/app/gmwshare/wx/7/21/",
                            data: {url: url},
                            method: "GET",
                            dataType: "jsonp",
                            jsonp: "callback",
                            jsonpCallback: "jsonpCallback",
                            success: function(data) {
                                wx.config({
                                    debug: false,
                                    appId: data[0].wx_appid,
                                    timestamp: data[1].wx_timestamp,
                                    nonceStr: data[2].wx_nonceStr,
                                    signature: data[3].wx_signature,
                                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage','updateAppMessageShareData', 'updateTimelineShareData']
                                });
                                //通过config接口注入权限验证配置
                                wx.ready(function() {
                                    var shareTitle = document.title;
                                    var shareImg = window.location.protocol+'//img.gmw.cn/pic/gmwLogo_share.jpg';// 默认分享图
                                    var shareDes = $('meta[name="description"]').attr('content') || '光明网－－知识分子网上精神家园，权威思想理论文化网站。';
                                    var shareLink = "https://" + window.location.hostname + window.location.pathname;	//http分享时强制分享https页面
                                    wx.onMenuShareTimeline({
                                        title: shareTitle,
                                        desc: shareDes,
                                        imgUrl: shareImg,
                                        link:shareLink
                                    });
                                    wx.onMenuShareAppMessage({
                                        title: shareTitle,
                                        desc: shareDes,
                                        imgUrl: shareImg,
                                        link: shareLink
                                    });
                                    // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
                                    wx.updateAppMessageShareData({
                                        title: shareTitle, // 分享标题
                                        desc: shareDes, // 分享描述
                                        link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
                                        imgUrl: shareImg // 分享图标
                                    });
                                    // 自定义“分享到朋友圈”及“分享到 QQ 空间”按钮的分享内容（1.4.0）
                                    wx.updateTimelineShareData({
                                        title: shareTitle, // 分享标题
                                        link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
                                        imgUrl: shareImg // 分享图标
                                    });
                                });
                            },
                            error: function(error) {console.log("token API error");}
                        });
                    });

            }
        }



    }
})();