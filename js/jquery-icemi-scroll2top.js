/**
 * Created by IceMimosa on 2015-11-04.
 */
(function($){

    $.fn.scroll2Top = function(options,callback){
        // 控件的形状常量
        var _shape = {
            rectangle : "rectangle",
            circle : "circle"
        };
        // 控件的样式类
        var _class = {
            none : "none",     // 隐藏class
            block : "block"  // 显示class
        }
        var settings = {
            right:200,                  // 距离右边的距离
            bottom:100,                 // 距离底部的距离
            width:50,                   // 控件的宽度
            height:50,                  // 控件的高度
            shape:_shape.circle,        // 控件的形状
            background: "#4caf50"       // 背景颜色
        };
        if(options){
            $.extend(settings,options);
        }
        // 绘制图形
        $(document.body).append("<div class='mimosa-scrollTop'><a href='javascript:;'>∧</a></div>");
        var scroll = $("div.mimosa-scrollTop");
        var _a = scroll.find("a");
        _init();

        // 滚动事件
        $(document).scroll(function(){
            var offset = $(document).scrollTop();
            if(offset > 50){
                _a.css("width",settings.width).css("height",settings.height);
                _a.removeClass(_class.none);
            }else{
                _a.css("width",0).css("height",0);
                _a.addClass(_class.none);
            }
        });
        // 点击回到顶部事件
        scroll.on("click","a",function(){
            // 解决调用两次事件的问题
            var trigger = true;
            $('html,body').animate({
                scrollTop:0
            },400,"swing",function(){
                if(trigger && typeof callback === 'function'){
                    trigger = false;
                    callback();
                }
            });
            return false;
        });
        /**
         * 初始化
         * @private
         */
        function _init(){
            scroll.css("right",settings.right + "px").css("bottom",settings.bottom + "px");
            _a.addClass(_class.none);
            _a.css("background",settings.background);
            _a.css("width",0);
            _a.css("height",0);
            if(settings.shape === _shape.circle){
                _a.css("border-radius","50%");
            }else if(settings.shape === _shape.rectangle){
                _a.css("border-radius","0");
            }
        }
    };
})(jQuery)