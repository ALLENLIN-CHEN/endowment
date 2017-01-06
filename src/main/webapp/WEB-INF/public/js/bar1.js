/**
 * Created by Allen on 2016/12/23.
 */
//柱状图统计
function bar1(year,data)
{
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('bar1'));
    var props = Object.getOwnPropertyNames(data.rank);
    var dataAxis = ['top1', 'top2', 'top3', 'top4', 'top5', 'top6', 'top7', 'top8', 'top9', 'top10'];
    if(data.type=='DifCompany'){
        var yMax = 2100000;
    }else if(data.type=='DifFinancial'){
        var yMax = 1000000;
    }else if(data.type=='SamCompany'){
        var yMax = 2100000;
    }else if(data.type=='SamFinancial'){
        var yMax = 1000000;
    }
    var dataShadow = [];
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
        dataShadow.push(yMax);
        arr.push(databar[i].sum);
    }

    option = {
        title: {
            text: 'Top10柱状图统计',
            subtext: '',
            textStyle: {
                color: '#fff',
            }
        },
        grid: {
            borderWidth: 0,
            textStyle: {
                color: "#fff"
            }
        },
        tooltip: {
            show: true,
            backgroundColor: '#384157',
            borderColor: '#384157',
            borderWidth: 1,
            formatter: '{b}:{c}元',
            extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
        },
        xAxis: {
            data: dataAxis,
            axisLabel: {
                inside: true,
                textStyle: {
                    color: '#fff',
                }
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                lineStyle: {
                    color: '#fff',
                },
                textStyle: {
                    color: '#fff'
                }
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            { // For shadow
                type: 'bar',
                itemStyle: {
                    normal: {color: '#fff'}
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: dataShadow,
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },

                data: arr
            }
        ]
    };

// Enable data zoom when user click bar.
    var zoomSize = 6;
    myChart.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, databar.length - 1)]
        });
    });

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    hideLoading();

}