/**
 * Created by Allen on 2016/12/23.
 */
//折线图统计
function bar2(year,data) {
    var myChart = echarts.init(document.getElementById('bar2'));
    var props = Object.getOwnPropertyNames(data.rank);
    var data_val=[];
   // var data_val = [1669647, 1405291, 1387796, 1253537, 1211143, 1188162, 794164, 732322, 689162, 638995],
    var  xAxis_val = ['top1', 'top2', 'top3', 'top4', 'top5', 'top6', 'top7', 'top8', 'top9', 'top10'];
    var data_val1 = [0, 0, 0, 0, 0, 0, 0];
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
    dataline=data.rank[props[index]];

    for(var i=0;i<dataline.length;i++){
        data_val.push(dataline[i].sum);
    }
    var option = {

        grid: {
            left: 10,
            top: '10%',
            bottom: 20,
            right: 40,
            containLabel: true
        },
        tooltip: {
            show: true,
            backgroundColor: '#384157',
            borderColor: '#384157',
            borderWidth: 1,
            formatter: '{b}:{c}元',
            extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
        },
        legend: {
            right: 0,
            top: 0,
            data: ['总量'],
            textStyle: {
                color: '#fff'
            }
        },
        title: {
            // text: 'Top10折线图统计',
            x: '4.5%',
            top: '1%',
            textStyle: {
                color: '#5c6076'
            }
        },
        xAxis: {
            data: xAxis_val,
            boundaryGap: false,
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2e3547'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#384157'
                }
            }
        },

        series: [
            {
                type: 'bar',
                name: 'linedemo',


                tooltip: {
                    show: false
                },
                animation: false,
                barWidth: 1.4,
                hoverAnimation: false,
                data: data_val,
                itemStyle: {
                    normal: {
                        color: '#f17a52',
                        opacity: 0.6,
                        label: {
                            show: false
                        }
                    }
                }
            },
            {
                type: 'line',
                name: '总量',

                animation: false,
                symbol: 'circle',

                hoverAnimation: false,
                data: data_val1,
                itemStyle: {
                    normal: {
                        color: '#f17a52',
                        opacity: 0,
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        color: '#384157',
                        opacity: 1
                    }
                }
            },
            {
                type: 'line',
                name: 'linedemo',
                smooth: true,
                symbolSize: 10,
                animation: false,
                lineWidth: 1.2,
                hoverAnimation: false,
                data: data_val,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        color: '#f17a52',
                        shadowBlur: 40,
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#f17a52',

                            }
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#f17a52',
                        opacity: 0.08
                    }
                }

            }
        ]
    };
    myChart.setOption(option);
}


