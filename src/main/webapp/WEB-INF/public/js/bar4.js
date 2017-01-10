/**
 * Created by Allen on 2016/12/25.
 */
//环形图
function bar4(year,data) {
    var myChart = echarts.init(document.getElementById('bar4'));
    var props = Object.getOwnPropertyNames(data.rank);
    if(data.type=='DifCompany'){
        var yMax = 2100000;
    }else if(data.type=='DifFinancial'){
        var yMax = 1000000;
    }else if(data.type=='SamCompany'){
        var yMax = 2100000;
    }else if(data.type=='SamFinancial'){
        var yMax = 1000000;
    }

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


    var dataStyle = {
        normal: {
            label: {show: false},
            labelLine: {show: false},
            shadowBlur: 40,
            shadowColor: 'rgba(40, 40, 40, 0.5)',
        }
    };
    var placeHolderStyle = {
        normal: {
            color: 'rgba(0,0,0,0)',
            label: {show: false},
            labelLine: {show: false},
            borderWidth: 1
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    option = {
        //backgroundColor: '#f4f2e3',
        color: ['#66ccff', '#6699ff', '#cd5e7e', '#e38980', '#f7db88'],
        tooltip: {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            backgroundColor: '#384157',
            borderColor: '#384157',
            borderWidth: 1,
            extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
        },
        legend: {
            itemGap: 10,
            data: ['Top1', 'Top2', 'Top3', 'Top4', 'Top5'],
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            width: '80%'
        },
        series: [
            {
                name: types[0],
                type: 'pie',
                clockWise: false,
                radius: [100, 90],
                itemStyle: dataStyle,
                hoverAnimation: false,

                data: [
                    {
                        value: arr[0],
                        name: 'Top1'
                    },
                    {
                        value: yMax-arr[0],
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }

                ]
            },
            {
                name: types[1],
                type: 'pie',
                clockWise: false,
                radius: [90, 80],
                itemStyle: dataStyle,
                hoverAnimation: false,

                data: [
                    {
                        value: arr[1],
                        name: 'Top2'
                    },
                    {
                        value: yMax-arr[1],
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: types[2],
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [80, 70],
                itemStyle: dataStyle,

                data: [
                    {
                        value: arr[2],
                        name: 'Top3'
                    },
                    {
                        value: yMax-arr[2],
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: types[3],
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [70, 60],
                itemStyle: dataStyle,

                data: [
                    {
                        value: arr[3],
                        name: 'Top4'
                    },
                    {
                        value: yMax-arr[3],
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: types[4],
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [60, 50],
                itemStyle: dataStyle,

                data: [
                    {
                        value: arr[4],
                        name: 'Top5'
                    },
                    {
                        value: yMax-arr[4],
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },

        ]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}