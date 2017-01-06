/**
 * Created by Allen on 2016/12/26.
 */
//饼图top3
function pie3(year,data) {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pie3'));
    var props = Object.getOwnPropertyNames(data.rank);
    arr=[];
    var total=0;
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
        total=total+arr[i];
    }
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                type: 'pie',
                name: 'Top3占前10总量',
                radius: ['95%', '70%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [
                    {
                        value: arr[2], name: '占比',
                        label: {
                            normal: {
                                formatter: '{d} %',
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        }
                    },
                    {
                        value: total-arr[2], name: '占位',
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#999'
                            }
                        },
                        label: {
                            normal: {
                                formatter: '\n占比'
                            }
                        }
                    }
                ]
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}