/**
 * Created by Allen on 2016/12/28.
 */
//最高值
function magic_number(year,data) {
    /*var num1 = $("#number1");
    var num2 = $("#number2");
    var num3 = $("#number3");
    var num4 = $("#number4");
    var num5 = $("#number5");
    var num6 = $("#number6");
    var num7 = $("#number7");*/
    var props = Object.getOwnPropertyNames(data.rank);
    arr=[];
    arrnums=[];
    strArry=[];

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

    for (var i = 0; i <databar.length; i++) {
        arr.push(databar[i].sum);
    }

    var str=arr[0].toString();

    strArry=str.split("");

    for(var j=0;j<strArry.length;j++){
        arrnums[j]=parseInt(strArry[j]);
    }

/*    num1.animate({count: arrnums[0]}, {
        duration: 100,
        step: function() {
            num1.text(String(parseInt(this.count)));
        }
    });
    num2.animate({count: arrnums[1]}, {
        duration: 100,
        step: function() {
            num2.text(String(parseInt(this.count)));
        }
    });
    num3.animate({count: arrnums[2]}, {
        duration: 100,
        step: function() {
            num3.text(String(parseInt(this.count)));
        }
    });
    num4.animate({count: arrnums[3]}, {
        duration: 100,
        step: function() {
            num4.text(String(parseInt(this.count)));
        }
    });
    num5.animate({count: arrnums[4]}, {
        duration: 100,
        step: function() {
            num5.text(String(parseInt(this.count)));
        }
    });
    num6.animate({count: arrnums[5]}, {
        duration: 100,
        step: function() {
            num6.text(String(parseInt(this.count)));
        }
    });
    num7.animate({count: arrnums[6]}, {
        duration: 100,
        step: function() {
            num7.text(String(parseInt(this.count)));
        }
    });*/

    document.getElementById('number1').innerHTML=arrnums[0];
    document.getElementById('number2').innerHTML=arrnums[1];
    document.getElementById('number3').innerHTML=arrnums[2];
    document.getElementById('number4').innerHTML=arrnums[3];
    document.getElementById('number5').innerHTML=arrnums[4];
    document.getElementById('number6').innerHTML=arrnums[5];
    document.getElementById('number7').innerHTML=arrnums[6];

};