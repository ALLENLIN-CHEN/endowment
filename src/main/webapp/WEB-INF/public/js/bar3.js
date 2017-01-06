/**
 * Created by Allen on 2016/12/25.
 */
//横向柱状图
function bar3(year,data) {
    var myChart = echarts.init(document.getElementById('bar3'));
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

    for (var i = 9; i >=0; i--) {
        arr.push(databar[i].sum);
    }
    option = {
        title: {
            text: 'Top10总量',
            //subtext: '数据来自网络'
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.001],
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#2e3547'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#384157'
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ['top10', 'top9', 'top8', 'top7', 'top6', 'top5', 'top4', 'top3', 'top2', 'top1'],
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#2e3547'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#384157'
                }
            }
        },
        series: [
            {
                name: '总量（元）',
                type: 'bar',
                data: arr
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
