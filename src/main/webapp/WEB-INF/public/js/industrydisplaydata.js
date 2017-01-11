function handleCharts(data) {

    var subchartwidth=div.offsetWidth*0.251;
    var subchartdivheight=div.offsetHeight*0.32;
    console.log(div.offsetWidth);
    var piePatternSrc = 'images/border.png'

    var piePatternImg = new Image();
    piePatternImg.src = piePatternSrc;
    piePatternImg.height=subchartdivheight;
    piePatternImg.width=subchartwidth;
    var canvas = document.createElement('canvas');
// canvas.css('height', 500);
// canvas.css('width', 400);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(piePatternImg, 0, 0, subchartwidth, subchartdivheight);

    // var data = {
    //     yearMap: {
    //         '2010': {
    //             personNum: 20500,//总人数
    //             //仪表盘数据
    //             rateTotal: 80.00,//参保率百分比
    //             rateMale: 78.00,//男参保率百分比
    //             rateFemale: 81.00,//女参保率百分比
    //             //男女占比数据
    //             insuredMaleNum: 2233,//男参保人数
    //             insuredFemaleNum: 3233,//女参保人数
    //             //年龄段分布
    //             ageGroupNum: [
    //                 {
    //                     value: 7700,
    //                     name: '18-22岁'
    //                 }, {
    //                     value: 8800,
    //                     name: '22-25岁'
    //                 }, {
    //                     value: 9900,
    //                     name: '25-30岁'
    //                 }, {
    //                     value: 8800,
    //                     name: '30-40岁'
    //                 }, {
    //                     value: 11100,
    //                     name: '40-50岁'
    //                 }, {
    //                     value: 9900,
    //                     name: '50岁以上'
    //                 }],
    //             //top10
    //             industryCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             industryDataMax: 24700,
    //             industryDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //
    //             unitCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             unitDataMax: 24700,
    //             unitDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //
    //             economyCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             economyDataMax: 24700,
    //             economyDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //             //折线
    //             yearTotalData: [60, 62, 81, 134, 90, 130, 110],
    //             yearMaleData: [31, 32, 41, 74, 50, 70, 60],
    //             yearFemaleData: [29, 30, 40, 60, 40, 60, 50],
    //             yearCategory: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    //             //柱状
    //             monthOfYearData: [20, 32, 31, 34, 39, 40, 50, 31, 34, 39, 40, 50],
    //             monthOfYearCategory: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    //             //行业分布
    //             industryPieData: [
    //                 {
    //                     value: 335,
    //                     name: '企业'
    //                 }, {
    //                     value: 310,
    //                     name: '城镇个体工商户'
    //                 }, {
    //                     value: 234,
    //                     name: '事业单位'
    //                 }, {
    //                     value: 135,
    //                     name: '机关'
    //                 }, {
    //                     value: 548,
    //                     name: '全额拨款事业单位'
    //                 }, {
    //                     value: 335,
    //                     name: '自收自支事业单位'
    //                 }, {
    //                     value: 310,
    //                     name: '再就业服务中心'
    //                 }, {
    //                     value: 234,
    //                     name: '其他'
    //                 }, {
    //                     value: 135,
    //                     name: '民办非企业单位'
    //                 }, {
    //                     value: 548,
    //                     name: '差额拨款事业单位'
    //                 }
    //             ]
    //         },
    //         '2011': {
    //             personNum: 20500,//总人数
    //             //仪表盘数据
    //             rateTotal: 80.00,//参保率百分比
    //             rateMale: 78.00,//男参保率百分比
    //             rateFemale: 81.00,//女参保率百分比
    //             //男女占比数据
    //             insuredMaleNum: 2233,//男参保人数
    //             insuredFemaleNum: 3233,//女参保人数
    //             //年龄段分布
    //             ageGroupNum: [
    //                 {
    //                     value: 7700,
    //                     name: '18-22岁'
    //                 }, {
    //                     value: 8800,
    //                     name: '22-25岁'
    //                 }, {
    //                     value: 9900,
    //                     name: '25-30岁'
    //                 }, {
    //                     value: 8800,
    //                     name: '30-40岁'
    //                 }, {
    //                     value: 11100,
    //                     name: '40-50岁'
    //                 }, {
    //                     value: 9900,
    //                     name: '50岁以上'
    //                 }],
    //             //top10
    //             industryCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             industryDataMax: 24700,
    //             industryDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //
    //             unitCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             unitDataMax: 24700,
    //             unitDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //
    //             economyCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             economyDataMax: 24700,
    //             economyDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //             //折线
    //             yearTotalData: [60, 62, 81, 134, 90, 130, 110],
    //             yearMaleData: [31, 32, 41, 74, 50, 70, 60],
    //             yearFemaleData: [29, 30, 40, 60, 40, 60, 50],
    //             yearCategory: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    //             //柱状
    //             monthOfYearData: [20, 32, 31, 34, 39, 40, 50, 31, 34, 39, 40, 50],
    //             monthOfYearCategory: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    //             //行业分布
    //             industryPieData: [
    //                 {
    //                     value: 335,
    //                     name: '企业'
    //                 }, {
    //                     value: 310,
    //                     name: '城镇个体工商户'
    //                 }, {
    //                     value: 234,
    //                     name: '事业单位'
    //                 }, {
    //                     value: 135,
    //                     name: '机关'
    //                 }, {
    //                     value: 548,
    //                     name: '全额拨款事业单位'
    //                 }, {
    //                     value: 335,
    //                     name: '自收自支事业单位'
    //                 }, {
    //                     value: 310,
    //                     name: '再就业服务中心'
    //                 }, {
    //                     value: 234,
    //                     name: '其他'
    //                 }, {
    //                     value: 135,
    //                     name: '民办非企业单位'
    //                 }, {
    //                     value: 548,
    //                     name: '差额拨款事业单位'
    //                 }
    //             ]
    //         },
    //         '2012': {
    //             personNum: 20500,//总人数
    //             //仪表盘数据
    //             rateTotal: 80.00,//参保率百分比
    //             rateMale: 78.00,//男参保率百分比
    //             rateFemale: 81.00,//女参保率百分比
    //             //男女占比数据
    //             insuredMaleNum: 2233,//男参保人数
    //             insuredFemaleNum: 3233,//女参保人数
    //             //年龄段分布
    //             ageGroupNum: [
    //                 {
    //                     value: 7700,
    //                     name: '18-22岁'
    //                 }, {
    //                     value: 8800,
    //                     name: '22-25岁'
    //                 }, {
    //                     value: 9900,
    //                     name: '25-30岁'
    //                 }, {
    //                     value: 8800,
    //                     name: '30-40岁'
    //                 }, {
    //                     value: 11100,
    //                     name: '40-50岁'
    //                 }, {
    //                     value: 9900,
    //                     name: '50岁以上'
    //                 }],
    //             //top10
    //             industryCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             industryDataMax: 24700,
    //             industryDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //
    //             unitCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             unitDataMax: 24700,
    //             unitDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //
    //             economyCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             economyDataMax: 24700,
    //             economyDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //             //折线
    //             yearTotalData: [60, 62, 81, 134, 90, 130, 110],
    //             yearMaleData: [31, 32, 41, 74, 50, 70, 60],
    //             yearFemaleData: [29, 30, 40, 60, 40, 60, 50],
    //             yearCategory: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    //             //柱状
    //             monthOfYearData: [20, 32, 31, 34, 39, 40, 50, 31, 34, 39, 40, 50],
    //             monthOfYearCategory: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    //             //行业分布
    //             industryPieData: [
    //                 {
    //                     value: 335,
    //                     name: '企业'
    //                 }, {
    //                     value: 310,
    //                     name: '城镇个体工商户'
    //                 }, {
    //                     value: 234,
    //                     name: '事业单位'
    //                 }, {
    //                     value: 135,
    //                     name: '机关'
    //                 }, {
    //                     value: 548,
    //                     name: '全额拨款事业单位'
    //                 }, {
    //                     value: 335,
    //                     name: '自收自支事业单位'
    //                 }, {
    //                     value: 310,
    //                     name: '再就业服务中心'
    //                 }, {
    //                     value: 234,
    //                     name: '其他'
    //                 }, {
    //                     value: 135,
    //                     name: '民办非企业单位'
    //                 }, {
    //                     value: 548,
    //                     name: '差额拨款事业单位'
    //                 }
    //             ]
    //         },
    //         '2013': {
    //             personNum: 20500,//总人数
    //             //仪表盘数据
    //             rateTotal: 80.00,//参保率百分比
    //             rateMale: 78.00,//男参保率百分比
    //             rateFemale: 81.00,//女参保率百分比
    //             //男女占比数据
    //             insuredMaleNum: 2233,//男参保人数
    //             insuredFemaleNum: 3233,//女参保人数
    //             //年龄段分布
    //             ageGroupNum: [
    //                 {
    //                     value: 7700,
    //                     name: '18-22岁'
    //                 }, {
    //                     value: 8800,
    //                     name: '22-25岁'
    //                 }, {
    //                     value: 9900,
    //                     name: '25-30岁'
    //                 }, {
    //                     value: 8800,
    //                     name: '30-40岁'
    //                 }, {
    //                     value: 11100,
    //                     name: '40-50岁'
    //                 }, {
    //                     value: 9900,
    //                     name: '50岁以上'
    //                 }],
    //             //top10
    //             industryCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             industryDataMax: 24700,
    //             industryDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //
    //             unitCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             unitDataMax: 24700,
    //             unitDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //
    //             economyCategory: [
    //                 '企业',
    //                 '城镇个体工商户',
    //                 '事业单位',
    //                 '机关',
    //                 '全额拨款事业单位',
    //                 '自收自支事业单位',
    //                 '再就业服务中心',
    //                 '其他',
    //                 '民办非企业单位',
    //                 '差额拨款事业单位'
    //             ],
    //             economyDataMax: 24700,
    //             economyDataList: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
    //             //折线
    //             yearTotalData: [60, 62, 81, 134, 90, 130, 110],
    //             yearMaleData: [31, 32, 41, 74, 50, 70, 60],
    //             yearFemaleData: [29, 30, 40, 60, 40, 60, 50],
    //             yearCategory: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    //             //柱状
    //             monthOfYearData: [20, 32, 31, 34, 39, 40, 50, 31, 34, 39, 40, 50],
    //             monthOfYearCategory: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    //             //行业分布
    //             industryPieData: [
    //                 {
    //                     value: 335,
    //                     name: '企业'
    //                 }, {
    //                     value: 310,
    //                     name: '城镇个体工商户'
    //                 }, {
    //                     value: 234,
    //                     name: '事业单位'
    //                 }, {
    //                     value: 135,
    //                     name: '机关'
    //                 }, {
    //                     value: 548,
    //                     name: '全额拨款事业单位'
    //                 }, {
    //                     value: 335,
    //                     name: '自收自支事业单位'
    //                 }, {
    //                     value: 310,
    //                     name: '再就业服务中心'
    //                 }, {
    //                     value: 234,
    //                     name: '其他'
    //                 }, {
    //                     value: 135,
    //                     name: '民办非企业单位'
    //                 }, {
    //                     value: 548,
    //                     name: '差额拨款事业单位'
    //                 }
    //             ]
    //         },
    //     },
    //     yearList: ['2010', '2011', '2012', '2013']
    // };


    var options = [];
    var baseOption = {};
    for (var index = 0; index < data.yearList.length; index++) {

        i = data.yearList[index];
        var yearOption = {
            textStyle: {
                // color: 'rgba(248, 188, 56,1)',
                fontSize: '13',
                // fontStyle:'oblique',
                fontWeight:'bold'

            },
            color: ['#1790CF','#1C7099',  '#1BB2D8', '#99D2DD', '#88B0BB', '#038CC4','#1E90FF','#00688B', '#45a7ca', '#98d5ef','#507B90'],
            title: [
                {
                    text: i + "年",
                    textStyle: {
                        color: 'rgba(255, 255, 255,0.8)',
                        fontSize: '35'
                    },
                    x: '62%',
                    y: '10%'
                },
                // {
                //     text: data.yearMap[i].personNum + "人",
                //     textStyle: {
                //         color: 'rgba(255, 255, 255,0.8)',
                //         fontSize: '300%'
                //     },
                //     x: '32%',
                //     y: '10%'
                // },
                //
                // {
                //     text: "总人数",
                //     textStyle: {
                //         color: 'rgb(248, 188, 56)',
                //         fontSize: '150%'
                //     },
                //     x: '27%',
                //     y: '10%'
                // },
                {
                    text: '企业员工参保基数分析',
                    textStyle: {
                        color: 'rgba(248, 188, 56,1)',
                        fontSize: '50',
                        // fontStyle:'oblique',
                        fontWeight:'bold'

                    },
                    // backgroundColor:'rgba(12, 218, 255, 0.611765)',
                    x: 'center',
                    y: '2%'
                },
                {
                    text: '参保人数变化',
                    textStyle: {
                        color: 'rgb(248, 188, 56)',
                        // fontSize: '100%',

                    },
                    x: 'center',
                    y: '33%'
                },
                {
                    text: "参保率",
                    textStyle: {
                        color: 'rgb(248, 188, 56)',
                        // fontSize: '22'
                    },
                    x: '1.5%',
                    y: '2%',
                }, {
                    text: '男女分布',
                    textStyle: {
                        color: 'rgb(248, 188, 56)',
                        // fontSize: '22'
                    },
                    x: '2%',
                    y: '35.5%'
                }, {
                    text: '年龄段分布',
                    x: '2%',
                    y: '69%',
                    textStyle: {
                        color: 'rgb(248, 188, 56)',
                        // fontSize: '22'
                    },
                }, {
                    text: '行业类型TOP10',
                    textStyle: {
                        color: 'rgb(248, 188, 56)',
                        // fontSize: '22'
                    },
                    x2: '2%',
                    y: '2%'
                }, {
                    text: "单位类型TOP10",
                    textStyle: {
                        color: 'rgb(248, 188, 56)',
                        // fontSize: '22'
                    },
                    x2: '2%',
                    y: '35.5%'
                }, {
                    text: "经济类型TOP10",
                    textStyle: {
                        color: 'rgb(248, 188, 56)',
                        // fontSize: '22'
                    },
                    x2: '2%',
                    y: '69%'
                }, {
                    text: "行业分布",
                    textStyle: {
                        color: 'rgb(248, 188, 56)',
                        // fontSize: '22'
                    },
                    x: '27%',
                    y: '18%'
                }],
            legend:{
                top:'80%',
                formatter: function (name) {
                    if(name==='男性')return '男';
                    if(name==='女性')return '女';
                    return name;
                },
                textStyle:{
                    color:"white"
                },
                icon:"circle",
                data:['人数','男性','女性']

            },
            grid: [
                {
                    x: '1%',
                    y: '1%',
                    width: '24%',
                    height: '30%',
                    // containLabel: true,
                    // show: true,
                    borderWidth: 2,
                    // backgroundColor:
                    //   'rgba(28,28,28,0.1)'
                    // {
                    //     image: canvas,
                    //     // image: piePatternImg,
                    //     repeat: 'no-repeat',
                    // }
                    // ,
                    borderColor:
                        'rgba(111, 194, 218, 0.8)',

                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 2
                },
                {
                    x: '1%',
                    y: '34%',
                    width: '24%',
                    height: '30%',
                    // containLabel: true,
                    // show: true,
                    borderWidth: 2,
                    borderColor: 'rgba(111, 194, 218, 0.8)',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 2
                },
                {
                    x: '1%',
                    y: '68%',
                    width: '24%',
                    height: '30%',
                    // containLabel: true,
                    // show: true,
                    borderWidth: 2,
                    borderColor: 'rgba(111, 194, 218, 0.8)',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 2
                },
                {
                    x2: '1.5%',
                    y: '6%',
                    width: '23%',
                    height: '27%',
                    containLabel: true,
                    // show: true,
                    borderWidth: 2,
                    borderColor: 'rgba(111, 194, 218, 0.8)',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 2
                },
                {
                    x2: '1.5%',
                    y: '39%',
                    width: '23%',
                    height: '27%',
                    containLabel: true,
                    // show: true,
                    borderWidth: 2,
                    borderColor: 'rgba(111, 194, 218, 0.8)',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 2
                },
                {
                    x2: '1.5%',
                    y: '73%',
                    width: '23%',
                    height: '27%',
                    containLabel: true,
                    // show: true,
                    borderWidth: 2,
                    borderColor: 'rgba(111, 194, 218, 0.8)',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 2
                },
                {
                    x: '38%',
                    y: '40%',
                    width: '25%',
                    height: '17%',
                    containLabel: true,
                    // show: true,
                    borderWidth: 2,
                    borderColor: 'rgba(111, 194, 218, 0.8)',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 2
                },
                {
                    x: '38%',
                    y: '59%',
                    width: '24%',
                    height: '17%',
                    containLabel: true,
                    // show: true,
                    borderWidth: 2,
                    borderColor: 'rgba(111, 194, 218, 0.8)',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 2
                },
                // {
                //     x2: '1%',
                //     y: '1%',
                //     width: '25%',
                //     height: '30%',
                //     containLabel: true,
                //     show: true,
                //     borderWidth: 2,
                //     borderColor: 'rgba(111, 194, 218, 0.8)',
                //     shadowColor: 'rgba(0, 0, 0, 0.3)',
                //     shadowBlur: 2
                // },
                // {
                //     x2: '1%',
                //     y: '34%',
                //     width: '25%',
                //     height: '30%',
                //     containLabel: true,
                //     show: true,
                //     borderWidth: 2,
                //     borderColor: 'rgba(111, 194, 218, 0.8)',
                //     shadowColor: 'rgba(0, 0, 0, 0.3)',
                //     shadowBlur: 2
                // },
                // {
                //     x2: '1%',
                //     y: '68%',
                //     width: '25%',
                //     height: '30%',
                //     containLabel: true,
                //     show: true,
                //     borderWidth: 2,
                //     borderColor: 'rgba(111, 194, 218, 0.8)',
                //     shadowColor: 'rgba(0, 0, 0, 0.3)',
                //     shadowBlur: 2
                // },
            ],
            tooltip: {
                // show:false,
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                // formatter: '{b}: {c}'
            },
            xAxis: [
                {
                    gridIndex: 0,
                    show: false
                },
                {
                    gridIndex: 1,
                    show: false
                },
                {
                    gridIndex: 2,
                    show: false,
                },
                {
                    gridIndex: 3,
                    type: 'value',
                    scale: true,
                    show:false,
                    max:"dataMax"
                },
                {
                    gridIndex: 4,
                    type: 'value',
                    max:"dataMax",
                    scale: true,
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }

                },
                {
                    gridIndex: 5,
                    type: 'value',
                    scale: true,
                    max:"dataMax",
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }

                },
                {
                    gridIndex: 6,
                    type: 'category',
                    // boundaryGap : false,
                    axisLine: {
                        // show: false
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    },
                    axisLabel: {
                        // 	show: false,
                        textStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    },
                    axisTick: {
                        show: false
                    },

                    data: data.yearMap[i].yearCategory,
                },
                {
                    gridIndex: 7,
                    type: 'category',
                    // boundaryGap : false,
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        // 	show: false,
                        textStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    },
                    axisTick: {
                        show: false
                    },

                    data: data.yearMap[i].yearCategory,
                },],
            yAxis: [
                {
                    gridIndex: 0,
                    show: false
                }, {
                    gridIndex: 1,
                    show: false,
                }, {
                    gridIndex: 2,
                    show: false,
                }, {
                    gridIndex: 3,
                    type: 'category',
                    inverse: "true",
                    data: data.yearMap[i].industryCategory,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: "rgb(191, 201, 206)",
                            // 	fontSize: 18
                        }
                    }
                }, {
                    gridIndex: 4,
                    type: 'category',
                    inverse: "true",
                    data: data.yearMap[i].unitCategory,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: "rgb(191, 201, 206)",
                            // 	fontSize: 18
                        }
                    }
                }, {
                    gridIndex: 5,
                    type: 'category',
                    inverse: "true",
                    data: data.yearMap[i].economyCategory,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: "rgb(191, 201, 206)",
                            // 	fontSize: 18
                        }
                    }

                }, {
                    gridIndex: 6,
                    // scale: true,
                    axisLine: {
                        // show: false
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    },
                    axisLabel: {
                        // 	show: false,
                        textStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                }, {
                    gridIndex: 7,
                    // scale: true,
                    axisLine: {
                        // show: false
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    },
                    axisLabel: {
                        // 	show: false,
                        textStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                },],
            // graphic: [
            //         {
            //             type: 'image',
            //             id: 'logo',
            //             left: '0.5%',
            //             top: 0,
            //             z: 10,
            //             bounding: 'raw',
            //             // origin: [125, 125],
            //             style: {
            //                 image: piePatternImg,
            //                 // image:'images/border.png',
            //                 // width: subchartwidth,
            //                 // height: subchartdivheight,
            //                 opacity: 0.9
            //             }
            //         },
            //         {
            //             type: 'image',
            //             left: '0.5%',
            //             top: '34%',
            //             z: 10,
            //             bounding: 'raw',
            //             // origin: [125, 125],
            //             style: {
            //                 image: piePatternImg,
            //                 // image:'images/border.png',
            //                 // width: subchartwidth,
            //                 // height: subchartdivheight,
            //                 opacity: 0.9
            //             }
            //         },
            //         {
            //             type: 'image',
            //             left: '0.5%',
            //             top: '68%',
            //             z: 10,
            //             bounding: 'raw',
            //             // origin: [125, 125],
            //             style: {
            //                 image: piePatternImg,
            //                 // image:'images/border.png',
            //                 // width: subchartwidth,
            //                 // height: subchartdivheight,
            //                 opacity: 0.9
            //             }
            //         }
            // ],
            series: [
                //仪表盘
                {
                    name: '总参保率',
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    radius: '18.5%',
                    center: ['13%', '18%'],
                    tooltip: {
                        // show:false,
                        trigger: 'item',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: '{b}: {c}%'
                    },
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [0.2, 'lime'],
                                [0.8, '#1e90ff'],
                                [1, '#ff4500']
                            ],
                            width: 3,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: { // 坐标轴小标记
                        // show:false,
                        textStyle: { // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            // color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        // length :13,        // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: { // 分隔线
                        length: 15, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 1,
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: { // 分隔线
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5,
                        width: '6%',
                        length: '50%'
                    },
                    title: {
                        offsetCenter: [0, '95%'],
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            // fontWeight: 'bolder',
                            // fontSize: 20,
                            // fontStyle: 'italic',

                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    detail: {
                        // backgroundColor: 'rgba(30,144,255,0.8)',
                        // borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5,
                        offsetCenter: [0, '55%'], // x, y，单位px
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            // fontWeight: 'bolder',
                            color: '#fff',
                            fontSize: 15,
                        },
                        formatter: "{value}%",
                    },
                    data: [{
                        value: data.yearMap[i].rateTotal,
                        name: '总'
                    }]
                },
                {
                    name: '男参保率',
                    type: 'gauge',
                    center: ['5.5%', '18%'], // 默认全局居中
                    radius: '15%',
                    min: 0,
                    max: 100,
                    endAngle: 45,
                    splitNumber: 5,
                    tooltip: {
                        // show:false,
                        trigger: 'item',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: '{b}: {c}%'
                    },
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [0.29, 'lime'],
                                [0.86, '#1e90ff'],
                                [1, '#ff4500']
                            ],
                            width: 2,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: { // 坐标轴小标记
                        textStyle: { // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            // color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        // length :12,        // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: { // 分隔线
                        length: 10, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            // width:3,
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        width: '6%',
                        length: '50%',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title: {
                        offsetCenter: [0, '95%'], // x, y，单位px
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            // fontWeight: 'bolder',
                            // fontStyle: 'italic',
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    detail: {
                        //backgroundColor: 'rgba(30,144,255,0.8)',
                        // borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5,
                        width: 80,
                        height: 30,
                        offsetCenter: [0, '55%'], // x, y，单位px
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            // fontWeight: 'bolder',
                            color: '#fff',
                            fontSize: '15'

                        },
                        formatter: "{value}%",
                    },
                    data: [{
                        value: data.yearMap[i].rateMale,
                        name: '男'
                    }]
                },
                {
                    name: '女参保率',
                    type: 'gauge',
                    center: ['20.5%', '18%'], // 默认全局居中
                    radius: '15%',
                    min: 0,
                    max: 100,
                    startAngle: 135,
                    splitNumber: 5,
                    tooltip: {
                        // show:false,
                        trigger: 'item',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: '{b}: {c}%'
                    },
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [0.29, 'lime'],
                                [0.86, '#1e90ff'],
                                [1, '#ff4500']
                            ],
                            width: 2,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: { // 坐标轴小标记
                        textStyle: { // 属性lineStyle控制线条样式
                            fontWeight: 'normal',
                            // color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        // length :12,        // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: { // 分隔线
                        length: 10, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            // width:3,
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        width: '6%',
                        length: '50%',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title: {
                        offsetCenter: [0, '95%'], // x, y，单位px
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            // fontWeight: 'bolder',
                            // fontStyle: 'italic',
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    detail: {
                        //backgroundColor: 'rgba(30,144,255,0.8)',
                        // borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5,
                        width: 80,
                        height: 30,
                        offsetCenter: [0, '55%'], // x, y，单位px
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            // fontWeight: 'bolder',
                            color: '#fff',
                            fontSize: '15'

                        },
                        formatter: "{value}%",
                    },
                    data: [{
                        value: data.yearMap[i].rateFemale,
                        name: '女'
                    }]
                },
                //男女占比饼图
                {
                    "center": [
                        "8.0%",
                        "51%"
                    ],
                    "radius": [
                        "16.5%",
                        "17%"
                    ],
                    "clockWise": false,
                    "hoverAnimation": false,
                    "type": "pie",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "fontSize": '100%',
                                    "fontWeight": "bold"
                                },
                                "position": "center"
                            },
                            "labelLine": {
                                "show": false
                            },
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 17
                        },
                        "emphasis": {
                            "label": {
                                "textStyle": {
                                    "fontSize": 15,
                                    "fontWeight": "bold"
                                }
                            },
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 25
                        }
                    },
                    tooltip: {
                        // show:false,
                        trigger: 'item',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: '{b}: {c}人({d}%)'
                    },
                    "data": [
                        {
                            "value": data.yearMap[i].insuredMaleNum,
                            "name": "男",
                            label: {
                                normal: {
                                    // show: false,
                                    position: 'center',
                                    formatter: '\n{b}: {c}人\n{d}%',
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        // fontSize: '20',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                        },
                        {
                            "name": " ",
                            "value": data.yearMap[i].insuredFemaleNum,
                            "itemStyle": {
                                "normal": {
                                    "label": {
                                        "show": false
                                    },
                                    "labelLine": {
                                        "show": false
                                    },
                                    "color": "#5886f0",
                                    "borderColor": "#5886f0",
                                    "borderWidth": 0
                                },
                                "emphasis": {
                                    "color": "#5886f0",
                                    "borderColor": "#5886f0",
                                    "borderWidth": 0
                                }
                            }
                        }
                    ]
                },
                {
                    "center": [
                        "19.0%",
                        "51%"
                    ],
                    "radius": [
                        "16.5%",
                        "17%"
                    ],
                    "clockWise": false,
                    "hoverAnimation": false,
                    "type": "pie",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "fontSize": "100%",
                                    "fontWeight": "bold"
                                },
                                "position": "center"
                            },
                            "labelLine": {
                                "show": false
                            },
                            "color": "#1BB2D8",
                            "borderColor": "#1BB2D8",
                            "borderWidth": 17
                        },
                        "emphasis": {
                            "label": {
                                "textStyle": {
                                    "fontSize": 15,
                                    "fontWeight": "bold"
                                }
                            },
                            "color": "#1BB2D8",
                            "borderColor": "#1BB2D8",
                            "borderWidth": 25
                        }
                    },
                    tooltip: {
                        // show:false,
                        trigger: 'item',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: '{b}: {c}人({d}%)'
                    },
                    "data": [
                        {
                            "value": data.yearMap[i].insuredFemaleNum,
                            "name": "女",
                            label: {
                                normal: {
                                    // show: false,
                                    position: 'center',
                                    formatter: '\n{b}: {c}人\n{d}%',
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        // fontSize: '20',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                        },
                        {
                            "name": " ",
                            "value": data.yearMap[i].insuredMaleNum,
                            "itemStyle": {
                                "normal": {
                                    "label": {
                                        "show": false
                                    },
                                    "labelLine": {
                                        "show": false
                                    },
                                    // "color": "#ee3a3a",
                                    "borderColor": "#ee3a3a",
                                    "borderWidth": 0
                                },
                                "emphasis": {
                                    "color": "#ee3a3a",
                                    "borderColor": "#ee3a3a",
                                    "borderWidth": 0
                                }
                            }
                        }
                    ]
                },
                //年龄段分布饼图
                {
                    center: ['13%', '84%'],
                    name: '年龄段分布',
                    type: 'pie',
                    radius: ['0%', '19.5%'],
                    roseType: "radius",
                    data: data.yearMap[i].ageGroupNum,
                    tooltip: {
                        // show:false,
                        trigger: 'item',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: '{b}: {c}人({d}%)'
                    },
                    label: {
                        normal: {
                            // show: false,
                            // position: 'center',
                            formatter: '{b}\n{d}%',
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                // fontSize: '20',
                                fontWeight: 'bold'
                            },
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            formatter: '{b}\n{c}人\n{d}%',
                        }
                    },
                    labelLine: {
                        normal: {
                            // show: false,
                            // position: 'center',
                            length:5,
                            length2:7
                        }
                    }
                },

                //top10
                {
                    xAxisIndex: 3,
                    yAxisIndex: 3,
                    // 辅助系列
                    name: 'TOP1',
                    type: 'bar',
                    silent: true,
                    barGap: '-85%',
                    barCategoryGap: '10%',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: 'rgba(0,0,0, .0)',
                            borderWidth: 1,
                            borderColor: "#ddd",
                        }
                    },
                    barWidth: '60%',
                    data: data.yearMap[i].industryDataList.map(function (d) {
                        return data.yearMap[i].industryDataMax
                    }),
                },
                {
                    xAxisIndex: 3,
                    yAxisIndex: 3,
                    name: '参保基数',
                    type: 'bar',
                    barWidth: '55%',
                    data: data.yearMap[i].industryDataList,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: 'rgb(111, 194, 218)',
                            shadowColor: 'rgba(0, 0, 0, 0.4)',
                            shadowBlur: 20
                        }
                    },
                    label: {
                        normal: {
                            // show: true,
                            // position: 'right',
                            textStyle: {
                                color: '#3398DB',
                                // 		fontSize: 10
                            }
                        },
                        emphasis: {
                            // show: true,
                            // position: 'right',
                            textStyle: {
                                color: '#3398DB',
                                fontSize: 30
                            }
                        }
                    }
                },
                {
                    xAxisIndex: 4,
                    yAxisIndex: 4,
                    // 辅助系列
                    name: 'TOP1',
                    type: 'bar',
                    silent: true,
                    barGap: '-85%',
                    barCategoryGap: '10%',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: 'rgba(0,0,0, .0)',
                            borderWidth: 1,
                            borderColor: "#ddd",
                        }
                    },
                    barWidth: '60%',
                    data: data.yearMap[i].unitDataList.map(function (d) {
                        return data.yearMap[i].unitDataMax
                    }),
                },
                {
                    xAxisIndex: 4,
                    yAxisIndex: 4,
                    name: '参保基数',
                    type: 'bar',
                    barWidth: '55%',
                    data: data.yearMap[i].unitDataList,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: 'rgb(111, 194, 218)',
                            shadowColor: 'rgba(0, 0, 0, 0.4)',
                            shadowBlur: 20
                        }
                    },
                    label: {
                        normal: {
                            // show: true,
                            position: 'right',
                            textStyle: {
                                color: '#3398DB',
                                // 		fontSize: 10
                            }
                        }
                    }
                },
                {
                    xAxisIndex: 5,
                    yAxisIndex: 5,
                    // 辅助系列
                    name: 'TOP1',
                    type: 'bar',
                    silent: true,
                    barGap: '-85%',
                    barCategoryGap: '10%',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: 'rgba(0,0,0, .0)',
                            borderWidth: 1,
                            borderColor: "#ddd",
                        }
                    },
                    barWidth: '60%',
                    data: data.yearMap[i].economyDataList.map(function (d) {
                        return data.yearMap[i].economyDataMax
                    }),
                },
                {
                    xAxisIndex: 5,
                    yAxisIndex: 5,
                    name: '参保基数',
                    type: 'bar',
                    barWidth: '55%',
                    data: data.yearMap[i].economyDataList,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: 'rgb(111, 194, 218)',
                            shadowColor: 'rgba(0, 0, 0, 0.4)',
                            shadowBlur: 20
                        }
                    },
                    label: {
                        normal: {
                            // show: true,
                            position: 'right',
                            textStyle: {
                                color: '#3398DB',
                                // 		fontSize: 10
                            }
                        }
                    }
                },

                //参保人数变化
                {
                    name: '人数',
                    type: 'line',
                    xAxisIndex: 6,
                    yAxisIndex: 6,
                    lineStyle: {
                        normal: {
                            // color:'rgba(65,105,225,1)',
                            // width: 2,
                            shadowColor: 'rgba(112, 155, 233, 0.5)',
                            shadowBlur: 4,
                            shadowOffsetY: 4
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'transparent'
                            }, {
                                offset: 0.2,
                                color: 'transparent'
                            }, {
                                offset: 1,
                                color: 'rgba(65,105,225, 0.4)'
                            }])
                        }
                    },
                    smooth: true,
                    data: data.yearMap[i].yearTotalData
                },
                {
                    name: '男性',
                    type: 'line',
                    xAxisIndex: 6,
                    yAxisIndex: 6,
                    lineStyle: {
                        normal: {
                            // width: 2,
                            // color:'rgba(173,216,230,1)',
                            shadowColor: 'rgba(112, 155, 233, 0.5)',
                            shadowBlur: 4,
                            shadowOffsetY: 4
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'transparent'
                            }, {
                                offset: 0.2,
                                color: 'transparent'
                            }, {
                                offset: 1,
                                color: 'rgba(112, 155, 233, 0.4)'
                            }])
                        }
                    },
                    smooth: true,
                    data: data.yearMap[i].yearMaleData
                },
                {
                    name: '女性',
                    type: 'line',
                    xAxisIndex: 6,
                    yAxisIndex: 6,
                    lineStyle: {
                        normal: {
                            // width: 2,
                            // color:'rgba(0,191,250,1)',
                            shadowColor: 'rgba(112, 155, 233, 0.5)',
                            shadowBlur: 4,
                            shadowOffsetY: 4
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'transparent'
                            }, {
                                offset: 0.2,
                                color: 'transparent'
                            }, {
                                offset: 1,
                                color: 'rgba(112, 155, 233, 0.4)'
                            }])
                        }
                    },
                    smooth: true,
                    data: data.yearMap[i].yearFemaleData
                },
                {
                    name: '人数',
                    type: 'bar',
                    xAxisIndex: 7,
                    yAxisIndex: 7,
                    // itemStyle: {
                    //     normal: {
                    //         color: new echarts.graphic.LinearGradient(
                    //             0, 0, 0, 1, [{
                    //                 offset: 0,
                    //                 color: 'lightblue'
                    //             }, {
                    //                 offset: 0.1,
                    //                 color: 'lightblue'
                    //             }, {
                    //                 offset: 1,
                    //                 color: 'blue'
                    //             }]
                    //         )
                    //     },
                    //     emphasis: {
                    //         color: new echarts.graphic.LinearGradient(
                    //             0, 0, 0, 1, [{
                    //                 offset: 0,
                    //                 color: 'blue'
                    //             }, {
                    //                 offset: 0.9,
                    //                 color: 'lightblue'
                    //             }, {
                    //                 offset: 1,
                    //                 color: 'lightblue'
                    //             }]
                    //         )
                    //     }
                    // },

                    lineStyle: {
                        normal: {
                            // width: 2,
                            shadowColor: 'rgba(112, 155, 233, 0.5)',
                            shadowBlur: 4,
                            shadowOffsetY: 4
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'transparent'
                            }, {
                                offset: 0.2,
                                color: 'transparent'
                            }, {
                                offset: 1,
                                color: 'rgba(112, 155, 233, 0.4)'
                            }])
                        }
                    },
                    smooth: true,
                    data: data.yearMap[i].yearTotalData
                },
                {
                    name: '男性',
                    type: 'bar',
                    xAxisIndex: 7,
                    yAxisIndex: 7,
                    //  itemStyle: {
                    //     normal: {
                    //         color: new echarts.graphic.LinearGradient(
                    //             0, 0, 0, 1, [{
                    //                 offset: 0,
                    //                 color: 'lightblue'
                    //             }, {
                    //                 offset: 0.1,
                    //                 color: 'lightblue'
                    //             }, {
                    //                 offset: 1,
                    //                 color: '#3398DB'
                    //             }]
                    //         )
                    //     },
                    //     emphasis: {
                    //         color: new echarts.graphic.LinearGradient(
                    //             0, 0, 0, 1, [{
                    //                 offset: 0,
                    //                 color: '#3398DB'
                    //             }, {
                    //                 offset: 0.9,
                    //                 color: 'lightblue'
                    //             }, {
                    //                 offset: 1,
                    //                 color: 'lightblue'
                    //             }]
                    //         )
                    //     }
                    // },
                    lineStyle: {
                        normal: {
                            // width: 2,
                            shadowColor: 'rgba(112, 155, 233, 0.5)',
                            shadowBlur: 4,
                            shadowOffsetY: 4
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'transparent'
                            }, {
                                offset: 0.2,
                                color: 'transparent'
                            }, {
                                offset: 1,
                                color: 'rgba(112, 155, 233, 0.4)'
                            }])
                        }
                    },
                    smooth: true,
                    data: data.yearMap[i].yearMaleData
                },
                {
                    name: '女性',
                    type: 'bar',
                    xAxisIndex: 7,
                    yAxisIndex: 7,
                    // itemStyle: {
                    //     normal: {
                    //         color: new echarts.graphic.LinearGradient(
                    //             0, 0, 0, 1, [{
                    //                 offset: 0,
                    //                 color: '#83bff6'
                    //             }, {
                    //                 offset: 0.5,
                    //                 color: '#188df0'
                    //             }, {
                    //                 offset: 1,
                    //                 color: '#188df0'
                    //             }]
                    //         )
                    //     },
                    //     emphasis: {
                    //         color: new echarts.graphic.LinearGradient(
                    //             0, 0, 0, 1, [{
                    //                 offset: 0,
                    //                 color: '#2378f7'
                    //             }, {
                    //                 offset: 0.7,
                    //                 color: '#2378f7'
                    //             }, {
                    //                 offset: 1,
                    //                 color: '#83bff6'
                    //             }]
                    //         )
                    //     }
                    // },
                    lineStyle: {
                        normal: {
                            // width: 2,
                            shadowColor: 'rgba(112, 155, 233, 0.5)',
                            shadowBlur: 4,
                            shadowOffsetY: 4
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'transparent'
                            }, {
                                offset: 0.2,
                                color: 'transparent'
                            }, {
                                offset: 1,
                                color: 'rgba(112, 155, 233, 0.4)'
                            }])
                        }
                    },
                    smooth: true,
                    data: data.yearMap[i].yearFemaleData
                },
                // {
                //     name: '人数',
                //     type: 'bar',
                //     xAxisIndex: 7,
                //     yAxisIndex: 7,
                //     barWidth: '50%',
                //     itemStyle: {
                //         normal: {
                //             color: new echarts.graphic.LinearGradient(
                //                 0, 0, 0, 1, [{
                //                     offset: 0,
                //                     color: '#83bff6'
                //                 }, {
                //                     offset: 0.5,
                //                     color: '#188df0'
                //                 }, {
                //                     offset: 1,
                //                     color: '#188df0'
                //                 }]
                //             )
                //         },
                //         emphasis: {
                //             color: new echarts.graphic.LinearGradient(
                //                 0, 0, 0, 1, [{
                //                     offset: 0,
                //                     color: '#2378f7'
                //                 }, {
                //                     offset: 0.7,
                //                     color: '#2378f7'
                //                 }, {
                //                     offset: 1,
                //                     color: '#83bff6'
                //                 }]
                //             )
                //         }
                //     },
                //     lineStyle: {
                //         normal: {
                //             // width: 2,
                //             shadowColor: 'rgba(112, 155, 233, 0.5)',
                //             shadowBlur: 4,
                //             shadowOffsetY: 4
                //         }
                //     },
                //     areaStyle: {
                //         normal: {
                //             color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                //                 offset: 0,
                //                 color: 'transparent'
                //             }, {
                //                 offset: 0.2,
                //                 color: 'transparent'
                //             }, {
                //                 offset: 1,
                //                 color: 'rgba(112, 155, 233, 0.4)'
                //             }])
                //         }
                //     },
                //     smooth: true,
                //     data: data.yearMap[i].monthOfYearData
                // },

                // {
                //     type: 'pie',
                //     center: ['13%', '50%'],
                //     radius: ['1%', '17%'],
                //     label: {
                //         normal: {
                //             position: 'inner',
                //             formatter: '{b}: {d}%',
                //             textStyle: {
                //                 // fontSize: 18,
                //                 color: 'white',

                //             }
                //         }
                //     },

                //     itemStyle: {
                //         normal: {
                //             opacity: 0.7,
                //             borderWidth: 3,
                //             borderColor: 'white',
                //         }
                //     },
                //     data: [{
                //         value: 310,
                //         name: '男',
                //         itemStyle: {
                //             normal: {
                //                 color: "rgba(0, 0, 0, 0.0)"
                //             }
                //         }
                //     }, {
                //         value: 335,
                //         name: '女',
                //         itemStyle: {
                //             normal: {
                //                 color: 'rgba(111, 194, 218,1.0)'
                //             }
                //         }
                //     },]
                // },


                {
                    name: '参保人数',
                    type: 'pie',
                    center: ['50%', '56%'],
                    radius: ['58%', '67%'],
                    avoidLabelOverlap: false,
                    tooltip: {
                        // show:false,
                        trigger: 'item',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: '{b}: {c}人({d}%)'
                    },
                    label: {
                        normal: {
                            // show: false,
                            // position: 'inside',
                            // formatter: '{b}\n{d}%',
                            formatter: function (params) {
                                if(params.name.length>3){
                                    return params.name.substr(0,3)+"…\n"+params.percent+"%";
                                }else
                                    return params.name+"\n"+params.percent+"%";
                            },
                        },
                        // emphasis: {
                        //     show: true,
                        //     textStyle: {
                        //         fontSize: '20',
                        //         fontWeight: 'bold'
                        //     },
                        //     position: 'inside',
                        //     formatter: '{b}\n{d}%',
                        // }
                    },
                    labelLine: {
                        normal: {
                            show: false,
                            length:12,
                            length2:4

                        }
                    },
                    data: data.yearMap[i].industryPieData
                }]
        };
        options.push(yearOption);
        if (index === 0)baseOption = yearOption;
    }

    baseOption.timeline = {
        axisType: 'category',
        data: data.yearList.map(function (v) {
            return v + '年'
        }),

        // orient: 'vertical',
        autoPlay: true,
        // inverse: true,
        playInterval: 5000,
        left: 'center',
        // right: 5,
        top: '92%',
        // bottom: 20,
        width: '40%',
        // height: null,
        label: {
            normal: {
                textStyle: {
                    color: '#ddd'
                }
            },
            emphasis: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        // symbol: 'circle',
        lineStyle: {
            color: '#555'
        },
        itemStyle: {
            normal: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 3,
                opacity: '0.7'
            }
        },
        checkpointStyle: {
            color: '#bbb',
            borderColor: '#777',
            borderWidth: 3
        },
        controlStyle: {
            // showNextBtn: false,
            // showPrevBtn: false,
            normal: {
                color: '#666',
                borderColor: '#666'
            },
            emphasis: {
                color: '#aaa',
                borderColor: '#aaa'
            }
        },


    };
    option =
    {
        baseOption: baseOption,
        options: options

    }

    return option;
}