function qrCreate(url){
    if(!($('#js-qrcode-img').length>0))return false;
    $('#js-qrcode-img').qrcode({
        width:120,
        height:120,
        text:url
    });
};

function sharePage(){
    var _url = window.location.href;
    //分享到新浪微博
    $('#js-share-weibo').on('click',function(e){
        e.preventDefault();
        var _title = $('#js-article-title').text();
        if(_title === ''){
            _title = $(document).attr('title');
        }
        _url += '#sns_weibo';
        var _pic = '';
        var _shareUrl = 'http://v.t.sina.com.cn/share/share.php?&appkey=1343713053'+    //真实的appkey，必选参数
            '&url='+ encodeURIComponent(_url)+                       //参数url设置分享的内容链接|默认当前页location，可选参数
            '&title=' + encodeURIComponent(_title)+                                 //参数title设置分享的标题|默认当前页标题，可选参数
            '&content=utf-8'+                                                      //参数content设置页面编码gb2312|utf-8，可选参数
            //'&pic=' + encodeURIComponent(_pic||'')+                                     //参数pic设置图片链接|默认为空，可选参数
            //'&searchPic=false';
            '&searchPic=true';
        window.open(_shareUrl,'_blank');
    });
    //分享到微信
    //生成二维码
    qrCreate(_url);
    var _qr = $('#js-qrcode-wrap');
    var _body = $('body');
    $('#js-share-weixin').on('click',function(e){
        _qr.removeClass('hidden');
        e.stopPropagation();
        _body.off('click').on('click',function(e){
            //遍历父级
            for(var n=e.target;n;){
                if(_qr.hasClass('hidden')||n.id=='js-qrcode-wrap')return false;
                n = n.parentNode;
            }
            _qr.addClass('hidden');
            _body.off('click');
        });
    });
    $('#js-qrcode-close').on('click',function(){
        _qr.addClass('hidden');
        _body.off('click');
    });
};






/**
 * 整体函数调用相关
 */
function init(){
    //分享
    sharePage();
    //
    doZoom($('#detail'));
     
    
};

$(function(){
    init();
});