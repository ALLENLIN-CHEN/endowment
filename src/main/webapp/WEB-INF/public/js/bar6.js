/**
 * Created by Allen on 2016/12/26.
 */
    // 基于准备好的dom，初始化echarts实例
//玫瑰图
    function bar6(year,data) {

    var myChart = echarts.init(document.getElementById('bar6'));
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
    option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: !0,
        series: [{
            name: "Top10占比",
            type: "pie",
            roseType: "radius",
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                },
                textStyle: {
                    color: '#fff'
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                value: arr[0],
                name: types[0]
            }, {
                value: arr[1],
                name: types[1]
            }, {
                value: arr[2],
                name: types[2]
            }, {
                value: arr[3],
                name: types[3]
            }, {
                value: arr[4],
                name: types[4]
            }, {
                value: arr[5],
                name: types[5]
            }, {
                value: arr[6],
                name: types[6]
            }, {
                value: arr[7],
                name: types[7]
            }, {
                value: arr[8],
                name: types[8]
            }, {
                value: arr[9],
                name: types[9]
            }]
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}