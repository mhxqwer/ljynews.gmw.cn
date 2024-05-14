/**
 * require 基础配置文件，各频道分置一份，内容可不同
 * 王爱民
 * 2018-07-16
 * 注意：默认路径为当前域名根，为避免路径出错，必须写完整全路径！！
 */
var REQUIRE_BASE_CONFIG = {
    baseUrl: window.location.protocol+"//"+window.location.hostname+'/',
    /*urlArgs: '_=' + Math.ceil(new Date().getTime()/120000),  // 在引入的资源后面加上时间戳，用于清除缓存。*/
    urlArgs: function(id, url){
        var args = '';
        if(url.indexOf('.mod') !== -1){
            args = '_=' + Math.ceil(new Date().getTime()/(60*2*1000));
        }else{
            args = '_=' + Math.ceil(new Date().getTime()/(60*60*24*1000));
        }
        return (url.indexOf('?') === -1 ? '?' : '&') + args;
    },
    waitSeconds: 30,
    // map: {
    //     "*" : window.location.protocol+"//img.gmw.cn/js/css.min.js",
    // },
    paths: {
        // 第三方类库
        "jquery"        : window.location.protocol+"//img.gmw.cn/js/js",
        "videoJsLib"    : window.location.protocol+"//img.gmw.cn/js/videojs/video.min",  //videoJs
        "jsmpegLib"     : window.location.protocol+"//img.gmw.cn/js/jsmpeg-player.umd.min",  //jsmpegPlayer自动播放视频(TS)插件
        "videoLib"      : window.location.protocol+"//img.gmw.cn/flash/gmwplayer2.0/ckplayer/ckplayer",  //视频播放器
        "videoXLib"     : window.location.protocol+"//img.gmw.cn/flash/gmwplayer_x/ckplayer",  //视频播放器ckplayerX
        //"videoXLib"     : window.location.protocol+"//img.gmw.cn/flash/gmwplayer_x/ckplayerX1",  //视频播放器ckplayerX1
        "hlsLib"        : window.location.protocol+"//img.gmw.cn/flash/gmwplayer_x/hls/hls.min",  //视频播放器ckplayerX使用H5播放M3U8
        "audioLib"      : window.location.protocol+"//img.gmw.cn/js/audiojs/audio",  //音频播放器
        "qrcodeLib"     : window.location.protocol+"//img.gmw.cn/js/jquery.qrcode.min",  //二维码生成Jq插件
        "swiperLib"     : window.location.protocol+"//img.gmw.cn/js/swiper/swiper276.min",  //swiper 图片轮播Jq插件
        "swiper4Lib"    : window.location.protocol+"//topics.gmw.cn/demo/js/require/swiper4.min",  //swiper 图片轮播Jq插件
        "swiper3Lib"    : window.location.protocol+"//img.gmw.cn/js/swiper.min",  //swiper版本3
        "swiperProgressLib" : window.location.protocol+"//img.gmw.cn/js/swiper/swiper.progress.min",  //swiper.progress
        "respondLib"    : window.location.protocol+"//img.gmw.cn/js/respond.min",  //让不支持css3 媒体查询的浏览器包括IE6-IE8等其他浏览器支持查询
        "cssLib"        : window.location.protocol+"//img.gmw.cn/js/require/css.min",  //require插件，加载CSS
        "lazyLoadLib"   : window.location.protocol+"//img.gmw.cn/js/jquery_lazyload",  //图片懒加载Jq插件
        "aliadLib"      : window.location.protocol+"//g.alicdn.com/openad/dsp-front-booth/3.0.1/odv.min",  //两段式广告代码 第一段
        "adIaxLib"      : window.location.protocol+"//static.iax.optimix.cn/js/iAXGMW",  //新广告代码 第一段
        "weixinLib"     : window.location.protocol+"//res.wx.qq.com/open/js/jweixin-1.6.0",  //微信SDK包
        "wxLoginLib"    : window.location.protocol+"//img.gmw.cn/js/wxLogin",  //微信扫码登陆
        "weibo"         : window.location.protocol+"//tjs.sjs.sinajs.cn/open/api/js/wb",  //微博话题墙
        "webterrenLib"  : window.location.protocol+"//cl.webterren.com/webdig.js?z=7",  //天润统计
        "superslideLib" : window.location.protocol+"//img.gmw.cn/plugins/superslide/js/jquery.SuperSlide.2.1.1",  //SuperSlide图片轮播Jq插件
        "roundaboutLib" : window.location.protocol+"//img.gmw.cn/js/jquery.roundabout",  //3D轮播图所依赖的js
        "roundaSLib"    : window.location.protocol+"//img.gmw.cn/js/jquery.roundabout-shapes",  //3D轮播图所依赖的js
        "carousel"      : window.location.protocol+"//topics.gmw.cn/demo/js/require/carousel",  //3D轮播图所依赖的js(另一种)
        "CloudCarousel" : window.location.protocol+"//topics.gmw.cn/demo/js/require/CloudCarousel",  //3D轮播图所依赖的js(参数可控)
        "quickflipLib"  : window.location.protocol+"//topics.gmw.cn/demo/js/require/jquery.quickflip.min",  //翻转效果所依赖的js
        "skrollrLib"    : window.location.protocol+"//topics.gmw.cn/demo/js/require/skrollr.min",  //视觉差所依赖的js
        "parallaxLib"   : window.location.protocol+"//img.gmw.cn/js/jquery.parallax",  //轻量级的的视差引擎，智能设备的方向作出反应所依赖的js
        "nicescrollLib" : window.location.protocol+"//img.gmw.cn/plugins/nicescroll/jquery.nicescroll.min",//滚动条美化插件
        "alexaLib"      : window.location.protocol+"//img.gmw.cn/js/gmw-ar",  //Alexa 统计
        "fragmentLib"   : window.location.protocol+"//topics.gmw.cn/demo/js/require/fragment",  //头图效果图片打散重组js
        "snowfallLib"   : window.location.protocol+"//topics.gmw.cn/demo/js/require/snowfall.jquery",  //下雪花插件
        "horwheel"      : window.location.protocol+"//img.gmw.cn/js/horwheel.min",  //横屏滚动
        "transitLib"    : window.location.protocol+"//topics.gmw.cn/demo/js/require/jquery.transit.min",  //jquery 动画所依赖的js
        "VRLib"         : window.location.protocol+"//img.gmw.cn/vrplayer/VRPlayer/VRPlayer.min", //VR视频框架
        "md5Lib"        : window.location.protocol+"//img.gmw.cn/js/jquery.md5", //md5加密
        "jeDateLib"     : window.location.protocol+"//img.gmw.cn/js/jedate", //jeDate生成日历框架
        "jcountdownLib" : window.location.protocol+"//img.gmw.cn/js/jquery.jcountdown.min", //jcountdown倒计时所依赖的js

        // 自主整理的模块
        "videoJsMod"            : window.location.protocol+"//img.gmw.cn/js/require/mod/videoJs.mod",  //videoJs视频模块
        "jsmpegPlayerMod"       : window.location.protocol+"//img.gmw.cn/js/require/mod/jsmpegPlayer.mod",  //jsmpegPlayer自动播放视频模块
        "conFunMod"             : window.location.protocol+"//img.gmw.cn/js/require/mod/conFun.mod",  //文章页模板基础模块
        "conMoreTextMod"        : window.location.protocol+"//img.gmw.cn/js/require/mod/conMoreText.mod",  //文章页正文自动加载部分
        "conBigimgMod"          : window.location.protocol+"//img.gmw.cn/js/require/mod/conBigimg.mod",  //大图文章页专有模块
        "conNineimgMod"         : window.location.protocol+"//img.gmw.cn/js/require/mod/conNineimg.mod",  //九宫格图片文章页专有模块
        "conNineimgAutoHMod"    : window.location.protocol+"//img.gmw.cn/js/require/mod/conNineimgAutoH.mod",  //九宫格图片文章页(缩略图宽固定高自动)模块
        "offlightsMod"          : window.location.protocol+"//img.gmw.cn/js/require/mod/offlights.mod",  //视频开关灯模块
        "conVideoMod"           : window.location.protocol+"//img.gmw.cn/js/require/mod/conVideo.mod",  //视频播放器模块
        "conAudioMod"           : window.location.protocol+"//img.gmw.cn/js/require/mod/conAudio.mod",  //音频播放器模块
        "conAudioImgMod"        : window.location.protocol+"//img.gmw.cn/js/require/mod/conAudioImg.mod",  //点击文章页图片播放音频模块
        "conVideoVerticalMod"   : window.location.protocol+"//img.gmw.cn/js/require/mod/conVideoVertical.mod",  //视频播放器竖屏版模块
        "conVideoLiveMod"       : window.location.protocol+"//img.gmw.cn/js/require/mod/conVideoLive.mod",  //视频直播ckplayerX模块
        "conShareMod"           : window.location.protocol+"//img.gmw.cn/js/require/mod/conShare.mod",  //文章页分享模块
        "motionsMod"            : window.location.protocol+"//img.gmw.cn/js/require/mod/motions.mod",  //表情模块
        "searchMod"             : window.location.protocol+"//img.gmw.cn/js/require/mod/search.mod",  //搜索模块
        "domainSloganMod"       : window.location.protocol+"//img.gmw.cn/js/require/mod/domainSlogan.mod",  //各频道短标内容
        "conWeixinShareMod"     : window.location.protocol+"//img.gmw.cn/js/require/mod/conWeixinShare.mod",  //微信分享模块
        "conWeixinShareForCP"   : window.location.protocol+"//img.gmw.cn/js/require/mod/conWeixinShareForCP.mod",  //微信分享模块-中国新闻摄影网用
        "picWeiXinShareMod"     : window.location.protocol+"//img.gmw.cn/js/require/mod/picWeiXinShare.mod",  //pic域名微信分享模块
        "topicsWeixinShareMod"  : window.location.protocol+"//img.gmw.cn/js/require/mod/topicsWeixinShare.mod",  //topics微信分享模块
        "conTxwMod"             : window.location.protocol+"//img.gmw.cn/js/require/mod/conTxw.mod",  //听新闻模块
        "conResearchMod"        : window.location.protocol+"//img.gmw.cn/js/require/mod/conResearch.mod",  //小调查模块
        "conSwiperMod"          : window.location.protocol+"//img.gmw.cn/js/require/mod/conSwiper.mod",  //文章页手机端点击图片滑动效果
        "analyticsMod"          : window.location.protocol+"//img.gmw.cn/js/require/mod/analytics.mod",  //统计代码模块，谷歌天润
        "videoXMod"             : window.location.protocol+"//img.gmw.cn/js/require/mod/videoX.mod",  //ckplayerX视频模块
        "objectDragMod"         : window.location.protocol+"//img.gmw.cn/js/require/mod/objectDrag.mod",  //对象超出屏幕一定高度显示在屏幕右下角，并且可以拖动
        "parallaxMod"           : window.location.protocol+"//img.gmw.cn/js/require/mod/parallax.mod",  //轻量级的的视差引擎，智能设备的方向作出反应
        "conKeywordSearchMod"   : window.location.protocol+"//img.gmw.cn/js/require/mod/conKeywordSearch.mod",  //关键词搜索
        "VRMod"                 : window.location.protocol+"//img.gmw.cn/js/require/mod/VRPlayer.mod", //VR视频模块
        "videoX2Mod"            : window.location.protocol+"//img.gmw.cn/js/require/mod/videoX2.mod",  //ckplayerX视频模块,更改了直播调用方式
        "particleMod"           : window.location.protocol+"//img.gmw.cn/js/require/mod/particle.mod",  //一个粒子效果，整理成通用MOD
        "publicFunMod"          : window.location.protocol+"//img.gmw.cn/js/require/mod/publicFun.mod",  //光明网公用函数库,将不断更新....
        "mainViewAnimateMod"    : window.location.protocol+"//img.gmw.cn/js/require/mod/mainViewAnimate.mod",  //普通专题头图随机动效

        //相关内容推荐接口模块
        "conCorrelatedNews6Mod"     : window.location.protocol+"//img.gmw.cn/js/require/mod/conCorrelatedNews6.mod",  //相关阅读接口模块
        "conHotNews10Mod"           : window.location.protocol+"//img.gmw.cn/js/require/mod/conHotNews10.mod",  //最热稿件接口模块
        "conRecommendatoryNews4Mod" : window.location.protocol+"//img.gmw.cn/js/require/mod/conRecommendatoryNews4.mod",  //相关图集接口模块
        "conUncorrelatedNews20Mod"  : window.location.protocol+"//img.gmw.cn/js/require/mod/conUncorrelatedNews20.mod",  //推荐阅读接口模块
        "conVisualFocus2Mod"        : window.location.protocol+"//img.gmw.cn/js/require/mod/conVisualFocus2.mod",  //视觉焦点接口模块
        //推荐阅读
        "recommendRead50Mod"        : window.location.protocol+"//img.gmw.cn/js/require/mod/recommendRead50.mod",  //推荐阅读模块，新加

        // 本频道内可自定义的部分
        "aliadMod" : get_domain_name("/require/mod/aliad.mod"),  //广告代码模块，加载各频道自己的MOD文件

        //***************专题所用模块*******************
        "FullScreenImgsMod"         : window.location.protocol+"//topics.gmw.cn/demo/js/require/mod/FullScreenImgs.mod",  //全屏轮播图
        "videoBroadcastMod"         : window.location.protocol+"//topics.gmw.cn/demo/js/require/mod/videoBroadcast.mod",  //视频联播
        "videoImgBroadcastMod"      : window.location.protocol+"//topics.gmw.cn/demo/js/require/mod/videoImgBroadcast.mod",  //图片轮播，点击相应图片视频播放，可传入视频的宽度，比例(最新)
        "videoPlayMod"              : window.location.protocol+"//topics.gmw.cn/demo/js/require/mod/videoPlay.mod",  //页面单独视频播放
        "rectangleCarouselLib"      : window.location.protocol+"//topics.gmw.cn/demo/js/require/mod/rectangleCarousel",  //竖图3D轮播所依赖的js
        "oneVideoPlayMod"           : window.location.protocol+"//topics.gmw.cn/demo/js/require/mod/oneVideoPlay.mod",  //只需传入一个宽度即可的视频播放
        "oneVideoPlayAuto_noAutoMod": window.location.protocol+"//topics.gmw.cn/demo/js/require/mod/oneVideoPlayAuto_noAuto.mod",  //只需传入一个宽度，是否自动播放，比例 即可的视频播放(最新)
        "sHoverLib"                 : window.location.protocol+"//img.gmw.cn/js/components/sHover.min",  //感应鼠标划进划出插件
        "videoBroadcastPlusMod"     : window.location.protocol+"//topics.gmw.cn/demo/js/require/mod/videoBroadcastPlus.mod",  //视频联播，可以传入视频宽度参数，并修复问题
        "videoMulticast"            : window.location.protocol+"//topics.gmw.cn/demo/js/require/mod/videoMulticast.mod",  //视频联播，传入视频宽度，是否自动播放，比例（最新），
        "gallerySwiperMod"          : window.location.protocol+"//topics.gmw.cn/demo/js/require/mod/gallerySwiper",  //swiper轮播效果（下面一排小图上面三个大图）

        // 手机文章页所需模块
        "mConMoreTextMod"   : window.location.protocol+"//img.gmw.cn/js/require/mod/mConMoreText.mod",  //手机版文章页正文部分自动展开效果
        "mConAudioMod"      : window.location.protocol+"//img.gmw.cn/js/require/mod/mConAudio.mod",  //手机版文章页音频模块，去掉多余的功能
        "mConMotionMod"     : window.location.protocol+"//img.gmw.cn/js/require/mod/mConMotion.mod",  //手机版文章页表情模块
        "mConFunMod"        : window.location.protocol+"//img.gmw.cn/js/require/mod/mConFun.mod",  //手机版文章页功能逻辑模块
        "mConWeixinShareMod": window.location.protocol+"//img.gmw.cn/js/require/mod/mWeixinShare.mod",  //手机版文章页微信分享模块
        "mGmwIndexMod"      : window.location.protocol+"//img.gmw.cn/js/require/mod/mGmwIndexFun.mod" //手机光明网首页功能模块
    },
    shim: {
        "videoLib"      : {"exports": "CKobject"},
        "videoXLib"     : {"exports": "ckplayer"},
        "jsmpegLib"     : {"exports": "JSMpeg"},
        "audioLib"      : {"exports": "audiojs"},
        "swiperLib"     : {"exports": "Swiper"},
        "swiper3Lib"    : {"exports": "Swiper","deps":["cssLib!"+window.location.protocol+"//img.gmw.cn/css/swiper.min"]},
        "swiperProgressLib":{deps: ["swiperLib"]},//依赖swiper
        "snowfallLib"   : {"exports": "snowfall"},
        "qrcodeLib"     : {"exports": "-"},
        "lazyLoadLib"   : {"exports": "-"},
        "aliadLib"      : {"exports": "_oaBt"},
        "webterrenLib"  : {"exports": "wd_paramtracker"},
        "weixinLib"     : {"exports": "wx"},
        "CloudCarousel" : {"exports": "CloudCarousel"},
        "offlightsMod"  : {
            init: function() {
                return {
                    closelights: closelights,
                    openlights: openlights
                }
            }
        },
        "videoJsLib"    : {
            "exports": "videojs",
            deps:["cssLib!"+window.location.protocol+"//img.gmw.cn/css/video-js.min"]
        },
        "mainViewAnimateMod": {
            "exports": "mainviewanimate",
            deps:["cssLib!"+window.location.protocol+"//img.gmw.cn/css/animate.min"]
        },
        "jeDateLib": {
            "exports": "jeDate",
            deps:["cssLib!"+window.location.protocol+"//img.gmw.cn/css/jedate"]
        },
        "jcountdownLib": {
            "exports": "jcountdown",
            deps:["cssLib!"+window.location.protocol+"//img.gmw.cn/css/jcountdown"]
        }
    }
};

function get_domain_name(url){
        // 翔宇预览时的处理
    if(window.location.host == "cms.gmw.cn:7001" || window.location.host == "192.168.126.83:7001"){
        return window.location.protocol+"//img.gmw.cn/js"+url;
    }else if(window.location.host == "gxy.health.gmw.cn" || window.location.href.indexOf("gxyhealth")>-1){
        // 如果是三级域名高血压时的处理，暂时只有一个三级域名需处理
        return "http://gxy.health.gmw.cn"+url;
    }else{
        // 如果是share的域名，先转回标准地址，再将其转换为协议+主机名的地址，再后再追加传进来的url参数内容
        var locationName = window.location.href.replace(/\/\/(share)\.gmw\.cn\/(\w+)\//g, function(a,b,c){
            return a.replace(c+'/','').replace(b, c);
        }).replace(/http(s?):\/\/(\w+)\.gmw\.cn\/(.+)/g, function(a,b,c,d){
            return a.replace('/'+d,"");
        });
        return locationName + url;
    }
}
function loadedHandler() {
    player.addListener('loadedmetadata', loadedMetaDataHandler);
}
function loadedMetaDataHandler() {
    var metaData = player.getMetaDate();
    var ismobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);
    if(ismobile){
        $("#a1").css({"height":"auto"});
    }else{
        if(metaData['streamHeight'] > metaData['streamWidth']) {
            $("#a1").css({"width": "420px","margin": "0 auto"});
        }
        $("#a1").css({
            "height": isNaN(metaData.streamHeight * $("#a1").width() / metaData.streamWidth) ? "405px" : metaData.streamHeight * $("#a1").width() / metaData.streamWidth
        });
    }
}