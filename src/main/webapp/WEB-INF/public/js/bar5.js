/**
 * Created by Allen on 2016/12/26.
 */
    // 基于准备好的dom，初始化echarts实例
//环形图
function bar5(year,data) {

    var myChart = echarts.init(document.getElementById('bar5'));
    var props = Object.getOwnPropertyNames(data.rank);
    arr=[];
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

    for (var i = 0; i < databar.length; i++) {

        arr.push(databar[i].sum);
    }
    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            shadowBlur: 40,
            shadowColor: 'rgba(40, 40, 40,0.5)',
        }
    };

    option = {
        //backgroundColor: '#f2f2f2',
        color: ['#ffdb6d', '#89c9e1', '#ce77b6', '#f29e29', '#99ccff'],

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: '2%',
            top: '40%',
            data: ['Top1', 'Top2', 'Top3', 'Top4', 'Top5'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: 'Top5总量占比',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: dataStyle,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.percent.toFixed(0) + '%';
                    },
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [{
                value: arr[0],
                name: 'Top1'
            }, {
                value: arr[1],
                name: 'Top2'
            }, {
                value: arr[2],
                name: 'Top3'
            }, {
                value: arr[3],
                name: 'Top4'
            }, {
                value: arr[4],
                name: 'Top5'
            }]
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
