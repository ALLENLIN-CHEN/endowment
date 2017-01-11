/**
 * Created by Allen on 2017/1/4.
 */
function value(year,data) {
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
    count1(arrnums[0]);
    count2(arrnums[1]);
    count3(arrnums[2]);
    count4(arrnums[3]);
    count5(arrnums[4]);
    count6(arrnums[5]);
    count7(arrnums[6]);
}