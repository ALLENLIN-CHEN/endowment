/**
 * Created by Allen on 2017/1/1.
 */
//文字滚动播报
function news(year,data) {
    var props = Object.getOwnPropertyNames(data.rank);
    arr=[];
    types=[];
    var index=0;
    if(year==2010){
        index=0;
    }else if(year==2011){
        index=1;
    }else if(year==2012){
        index=2;
    }else if(year==2013){
        index=3;
    }else if(year==2014){
        index=4;
    }else{
        index=5;
    }
    databar=data.rank[props[index]];

    if(data.type === 'DifCompany') {
        for (var i = 0; i < databar.length; i++) {
            arr.push(databar[i].sum);
            types.push(databar[i].company_type);
        }
    }else if(data.type === 'DifFinancial') {
        for (var i = 0; i < databar.length; i++) {
            arr.push(databar[i].sum);
            types.push(databar[i].financial_type);
        }
    } else if(data.type === 'SamCompany') {
        for (var i = 0; i < databar.length; i++) {
            arr.push(databar[i].sum);
            types.push(databar[i].industry_code);
        }
    } else if(data.type === 'SamFinancial') {
        for (var i = 0; i < databar.length; i++) {
            arr.push(databar[i].sum);
            types.push(databar[i].industry_code);
        }
    }
    document.getElementById('type1').innerHTML=types[0];
    document.getElementById('num1').innerHTML=arr[0];
    document.getElementById('type2').innerHTML=types[1];
    document.getElementById('num2').innerHTML=arr[1];
    document.getElementById('type3').innerHTML=types[2];
    document.getElementById('num3').innerHTML=arr[2];
    document.getElementById('type4').innerHTML=types[3];
    document.getElementById('num4').innerHTML=arr[3];
    document.getElementById('type5').innerHTML=types[4];
    document.getElementById('num5').innerHTML=arr[4];
    document.getElementById('type6').innerHTML=types[5];
    document.getElementById('num6').innerHTML=arr[5];
    document.getElementById('type7').innerHTML=types[6];
    document.getElementById('num7').innerHTML=arr[6];
    document.getElementById('type8').innerHTML=types[7];
    document.getElementById('num8').innerHTML=arr[7];
    document.getElementById('type9').innerHTML=types[8];
    document.getElementById('num9').innerHTML=arr[8];
    document.getElementById('type10').innerHTML=types[9];
    document.getElementById('num10').innerHTML=arr[9];

}
(function($){
        $.fn.myScroll = function(options){

            var defaults = {
                speed:90,
                rowHeight:24
            };

            var opts = $.extend({}, defaults, options),intId = [];

            function marquee(obj, step){

                obj.find("ul").animate({
                    marginTop: '-=1'
                },0,function(){
                    var s = Math.abs(parseInt($(this).css("margin-top")));
                    if(s >= step){
                        $(this).find("li").slice(0, 1).appendTo($(this));
                        $(this).css("margin-top", 0);
                    }
                });
            }

            this.each(function(i){
                var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
                intId[i] = setInterval(function(){
                    if(_this.find("ul").height()<=_this.height()){
                        clearInterval(intId[i]);
                    }else{
                        marquee(_this, sh);
                    }
                }, speed);

                _this.hover(function(){
                    clearInterval(intId[i]);
                },function(){
                    intId[i] = setInterval(function(){
                        if(_this.find("ul").height()<=_this.height()){
                            clearInterval(intId[i]);
                        }else{
                            marquee(_this, sh);
                        }
                    }, speed);
                });

            });

        }

})(jQuery);
