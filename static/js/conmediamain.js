if(typeof REQUIRE_BASE_CONFIG === "undefined"){
    alert('REQUIRE_BASE_CONFIG is not find');
}
require.config(REQUIRE_BASE_CONFIG);
require([
        'conFunMod',
        'conShareMod',
        'conCorrelatedNews6Mod',
    ],
    function(){
        $(function(){
            //如果从微信打开，且是share域名
            if(window.navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1 && window.location.hostname == 'share.gmw.cn'){
                //则加载微信分享MOD
                require(["conWeixinShareMod"]);
            }

            // 判断多媒体链接处的内容，按需加载音视频模块
            var MultiAttachPh = $.trim($("#MultiAttachPh").text());
            var fileType = MultiAttachPh.substring(MultiAttachPh.lastIndexOf('.'));
            var isVR = MultiAttachPh.toLowerCase().indexOf('vr');
            var btnPlayAudio = $(".btn_playAudio").length;
            if(fileType == ".mp3") {
                if(btnPlayAudio > 0){
                    $(".m-player_box").hide();
                    $("#a1").addClass("g-audio2");
                    require(['conAudioImgMod']);
                }else{
                    $(".m-player_box").show();
                    $(".m-player_box video").hide();
                    $("#a1").addClass("g-audio2");
                    require(['conAudioMod']);
                }
            }else if(fileType == ".mp4" || fileType == ".m3u8" || fileType == ".flv"){
                if(isVR == -1) {
                    if($(".m-player_box video").length <= 0) {
                        $(".m-player_box").html("<video id='myVideo' width='100%' class='video-js vjs-big-play-centered' webkit-playsinline='true' playsinline='true'></video>").show();
                    } else {
                        $(".m-player_box").show();
                        $("#a1").remove();
                    };
                    $("#video").css({
                        'background': 'url(https://img.gmw.cn/pic/loading.gif) center center no-repeat',
                        'text-align': 'center'
                    }).find("video").css({"height": $(".m-player_box").width() * 0.5625});
                    require(['videoJsMod'], function(videojs) {
                        if($(".multiVideo").length <= 0) {
                            videojs({
                                objectId: '#myVideo',
                                smallPlayer: true,
                                accessType: "content"
                            });
                        } else {
                            videojs({
                                autoplay: false,
                                objectId: '#myVideo',
                                smallPlayer: true
                            });
                        };
                    });
                } else {
                    $(".m-player_box").show();
                    $(".m-player_box video").hide();
                    var vrUrl = MultiAttachPh.toLowerCase().replace("vr","");
                    if (MultiAttachPh.toLowerCase().indexOf('vr') != -1) {
                        require(['VRMod'], function (VRfun) {
                            VRfun({
                                'url': vrUrl
                            });
                        });
                    };
                };
            }else{
                if(MultiAttachPh.indexOf('vrpic') != -1){
                    /*全景图片时的解决方案*/
                }else{
                    /* 如果是非IE浏览器，且模板中没有音视频的情况下才加载听新闻功能
                    2022-7-6 百度不再免费使用TTS功能，听新闻功能暂时下架
                    if(window.navigator.userAgent.toLowerCase().indexOf('msie') == -1) {
                        require(['conTxwMod'], function(txw) {
                            txw({});
                        });
                    };*/
                };
            };

            // 判断页面中是否有多视频插件，并且多媒体链接处的内容不为视频再调用，避免videoJs多次调用
            if($(".multiVideo").length > 0 && fileType != ".mp4" && fileType != ".m3u8") {
                require(['videoJsMod'], function(videojs) {
                    videojs({});
                });
            };

            //根据左侧正文高度，适当调整右侧推荐部分的高
            function spPage(){
                var conLeft_h=$(".g-main .m-l-main").outerHeight(true);
                var conRight_h=$(".g-main .m-r-main").outerHeight(true);
                var  differ_num=conRight_h - conLeft_h;
                if(differ_num<10){

                }else if(differ_num<-360){
                    $("#m-eyecatcher ul li:eq(0)").hide();//右侧的视觉焦点第一条隐藏
                    $("#m-hotArticle ul li").eq(4).nextAll().hide();
                }else{
                    if(differ_num < 260 && differ_num >=100){
                        $("#m-eyecatcher ul li:eq(0)").hide();//右侧的视觉焦点第一条隐藏
                    }else if(differ_num < 960 && differ_num >=260){
                        $("#m-eyecatcher ul li:eq(0)").hide();//右侧的视觉焦点第一条隐藏
                        $("#m-hotArticle ul li").eq(4).nextAll().hide();
                    }else if(differ_num < 1300 && differ_num >=960){
                        $("#m-eyecatcher ul li:eq(0)").hide();//右侧的视觉焦点第一条隐藏
                        $("#m-hotArticle").hide();
                    };
                };
            };

            function isMob() {
                return /AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))
            };

            //加载表情代码。优化加载顺序
            require(['motionsMod'], function(showMotions){
                showMotions();
            });

            //加载视觉焦点。优化加载顺序
            require(['conVisualFocus2Mod']);

            if (window.ActiveXObject || "ActiveXObject" in window){
                // 点击加载更多
                $(".m-lists").hide();
                $(".m-lists").eq(0).show();
                $(".u-loadmore").click(function() {
                    if($(".g-readscon .m-lists:hidden").length >1){
                        $(".g-readscon .m-lists:hidden").eq(0).show();
                    }else{
                        $(".g-readscon .m-lists:hidden").eq(0).show();
                        $(this).hide();
                    }
                });
            };

            //最后加载广告代码。优化加载顺序 2020-11-4 把手机端分享内容从判断媒体的条件中拿出。手机端带视频的文章页也应有分享
            if(isMob()){
                $(".m-btm-ad-box,.u-rightad_300x250").hide();
                $("#share").prepend('<div id="share-icon"><img atremote src="//img.gmw.cn/pic/conimages/share_img.svg"></div>');
                $("#share-icon").click(function(){
                    $(".share a").toggleClass("dn");
                });
            } else {
                setTimeout(function(){
                    spPage();
                },600);
                require(['aliadMod']);
            };
        });
    }
);