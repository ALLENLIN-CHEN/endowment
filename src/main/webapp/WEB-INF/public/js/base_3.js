/**
 * 用于处理不同类型的图表
 */
function getCharts(data) {
	if(data.type === 'base_3_2') {
		return getBase_3_2(data);
	}else if(data.type === 'base_3_3') {
		return getBase_3_3(data);
	}else if(data.type === 'base_3_4') {
		return getBase_3_4(data);
	}else if(data.type === 'test') {
		return gettest(data);
	}
}
/***********************************/

/**
 * 生成各图表的方法
 */
// 以X轴为值轴
function getBase_3_2(data) {
	var timeLineOptions = [];
	for(var index in data.financial_type) {
		var total=[];
		for(var i=0;i<6;i++){
			total.push(data.financial_type[index].female[i]+data.financial_type[index].male[i])
		}
		timeLineOptions.push({
			name:'总和',
			type:'line',
			areaStyle: {normal: {}},
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
			smooth:true,
			symbolSize:10,
			animation:false,
			lineWidth:1.2,
			hoverAnimation:false,
			symbol:'circle',
			data: total
		});
		timeLineOptions.push({
			name:'女',
			type:'line',
			areaStyle: {normal: {}},
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
			smooth:true,
			symbolSize:10,
			animation:false,
			lineWidth:1.2,
			hoverAnimation:false,
			symbol:'circle',
			data: data.financial_type[index].female
		});
		timeLineOptions.push({
			name:'男',
			type:'line',
			areaStyle: {normal: {}},
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
			smooth:true,
			symbolSize:10,
			animation:false,
			lineWidth:1.2,
			hoverAnimation:false,
			symbol:'circle',
			data: data.financial_type[index].male
		});
	}

	var option = {
		title: {
			text: '各经济类型参保人数男女变化',
			subtext: data.financial_type[0].financial_name
		},
        dataZoom: [{
            show: true,
            height: 30,
            xAxisIndex: [
                0
            ],
            bottom: 30,
            start: 0,
            end: 100,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle:{
                color:"#d3dee5",

            },
            textStyle:{
                color:"black"
            },
            borderColor:"#90979c"


        }, {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35
        }],
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType : {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		tooltip : {
			show:true,
			backgroundColor:'#384157',
			borderColor:'#384157',
			borderWidth:1,
			//formatter:'{b}{a}:{c}',
			extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)',
			formatter: function(v) {
				var i = parseInt(v.seriesIndex/2);
				return v.name+'-'+v.seriesName+' : '+v.value+"人";
			}
		},
		legend: {
			data:['男', '女','总和']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '12%',
			containLabel: true
		},
		yAxis : [
			{
				ayisLine:{
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5c6076'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#384157'
					}
				},
				type : 'value'
			}
		],
		xAxis : [
			{
				boundaryGap:false,
				axisLine:{
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5c6076'
					}
				},
				axisTick:{
					show:false
				},
				type : 'category',
				data : ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年']
			}
		],
		series : timeLineOptions
	};
	return option;
}

function getBase_3_3(data) {
	var timeLineOptions = [];
	var times = ['2010年','2011年','2012年','2013年','2014年','2015年'];
	var financial_types = [];
	for(var index in data.financial_type) {
		financial_types = data.financial_type[0].financial_name;
		var datas = [];
		for(var i in data.financial_type[index].age){
			datas.push({
				name:data.financial_type[index].age[i],
				value:data.financial_type[index].person_num[i]
			})
		}
		timeLineOptions.push({
			title : {
				text: times[index]+'不同年龄段占比',
				subtext: data.financial_name
			},
			legend: {
				data:data.financial_type[index].age
			},
			series: [
				{
					label: {
						normal: {
							show: true
						}
					},
					data: datas
				}
			]
		});
	}

	var option = {
		baseOption: {
			title: {
				text: '',
				subtext:''
			},
			timeline: {
				axisType: 'category',
				autoPlay: true,
				playInterval: 3000,
				orient: 'vertical',
				inverse: true,
				right: 0,
				top: 150,
				bottom: 10,
				width: 60,
				data: times
			},
			toolbox: {
				show : true,
				feature : {
					dataView : {show: true, readOnly: false},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			tooltip : {
				show:true,
				backgroundColor:'#384157',
				borderColor:'#384157',
				borderWidth:1,
				extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)',
				formatter:'{b}:{c}%'
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			series :  [
				{
					type: 'funnel',
                    label: {
                        normal: {
                            position:'inside',
                        }
                    },
				}
			]
		},
		options: timeLineOptions
	};
	return option;
}

function getBase_3_4(data) {
	var timeLineOptions = [];
	var times = ['2010年','2011年','2012年','2013年','2014年','2015年'];
	var financial_types = [];
	for(var index in data.financial_type) {
		financial_types = data.financial_type[0].financial_name;
		timeLineOptions.push({
			title : {text: times[index]+'各经济类型参保基数TOP10'},
			xAxis : [
				{
					type : 'category',
					//inverse: true,
					axisTick : {show: false},
					data : data.financial_type[index].financial_name
				}
			],
			series: [
				{
					label: {
						normal: {
							show: true
						}
					},
					data: data.financial_type[index].base
				}
			]
		});
	}

	var option = {
		baseOption: {
			title: {
				text: '各经济类型参保人数男女变化'
			},
			timeline: {
				axisType: 'category',
				autoPlay: true,
				playInterval: 3000,
				orient: 'vertical',
				inverse: true,
				right: 0,
				top: "10%",
				bottom: '15%',
				width: 60,
				data: times
			},
			grid: {
				left: '3%',
				right: '7%',
				containLabel: true
			},
            dataZoom: [{
                show: true,
                height: 30,
                xAxisIndex: [
                    0
                ],
                bottom: 30,
                start: 0,
                end: 100,
                handleSize: '110%',
                handleStyle:{
                    color:"#d3dee5",

                },
                textStyle:{
                    color:"black"
                },
                borderColor:"#90979c"


            }, {
                type: "inside",
                show: true,
                height: 15,
                start: 1,
                end: 35
            }],
			toolbox: {
				show : true,
				feature : {
					mark : {show: true},
					dataView : {show: true, readOnly: false},
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			tooltip : {
				show:true,
				backgroundColor:'#384157',
				borderColor:'#384157',
				borderWidth:1,
				extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)',
				formatter: function(v) {
					return 'TOP'+(v.dataIndex+1)+'-'+v.name.replace(/\s+/g,"")+' : '+v.value;
				}
			},
			grid: {
				left: '3%',
				right: '10%',
				bottom: '12%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'value'
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series :  [
				{
					type: 'bar',
					itemStyle: {
						normal: {
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function(p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            },
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
				}
			]
		},
		options: timeLineOptions
	};
	return option;
}

function gettest(data){
    var times = ['2010年','2011年','2012年','2013年','2014年','2015年'];
	var timelineoption = [];
    var male = [];
    var female = [];
    var age1 = [];
    var age2 = [];
    var age3 = [];
    var age4 = [];
    var radar_data = [];
	$.get('../jsons/孝感市.json', function (geoJson) {
        for(var i in times){
            var xiaogan_geo = [
                {name: '应城市', value: [113.573842,30.939038,data.hos_2[i].应城市]},
                {name: '孝昌县', value: [113.988964,31.251618,data.hos_2[i].孝昌县]},
                {name: '孝南区', value: [113.925849,30.925966,data.hos_2[i].孝南区]},
                {name: '云梦县', value: [113.750616,31.021691,data.hos_2[i].云梦县]},
                {name: '大悟县', value: [114.126249,31.565483,data.hos_2[i].大悟县]},
                {name: '安陆市', value: [113.690401,31.26174,data.hos_2[i].安陆市]},
                {name: '汉川市', value: [113.835301,30.652165,data.hos_2[i].汉川市]}
            ];
            var xiaogan_map = [
                {name: '应城市', value: data.hos_2[i].应城市人数},
                {name: '孝昌县', value: data.hos_2[i].孝昌县人数},
                {name: '孝南区', value: data.hos_2[i].孝南区人数},
                {name: '云梦县', value: data.hos_2[i].云梦县人数},
                {name: '大悟县', value: data.hos_2[i].大悟县人数},
                {name: '安陆市', value: data.hos_2[i].安陆市人数},
                {name: '汉川市', value: data.hos_2[i].汉川市人数}
            ];
            var xiaogan_radar = [
                data.hos_2[i].应城市,
                data.hos_2[i].孝昌县,
                data.hos_2[i].孝南区,
                data.hos_2[i].云梦县,
                data.hos_2[i].大悟县,
                data.hos_2[i].安陆市,
                data.hos_2[i].汉川市
            ];
            radar_data.push({
                name: times[i]+'各地区覆盖率',
                value:xiaogan_radar
            });
            male.push(Number(data.hos_2[i].male));
            female.push(Number(data.hos_2[i].female));
            age1.push(Number(data.hos_2[i].age_num[0]));
            age2.push(Number(data.hos_2[i].age_num[1]));
            age3.push(Number(data.hos_2[i].age_num[2]));
            age4.push(Number(data.hos_2[i].age_num[3]));
            timelineoption.push({
                title: [{
                    text: data.area_clicked+'用卡行为业务分析',
                    backgroundColor:'rgba(30,144,255, 0.5)',
                    //borderColor:'lightskyblue',
                    padding:10,
                    //borderWidth:1,
                    link:'maptest.html',
                    target:'self',
                    textStyle : {
                        color: '#fff',
                        fontSize:60
                    },
                    x: '3%',
                    y: '7%',
                    subtext:times[i]+'就医服务业务分析',
                    subtextStyle:{
                        //color: '#fff',
                        fontSize:30
                    }
                }, {
                    text: '就医服务数量TOP10',
                    x: '9%',
                    y: '30%',
                    textAlign: 'center',
                    textStyle : {
                        color: '#fff'
                    }
                },{
                    text: '男/女\n'+Math.round(100*Number(data.hos_2[i].male)/(Number(data.hos_2[i].female)+Number(data.hos_2[i].male)))+'/'+Math.round(100*Number(data.hos_2[i].female)/(Number(data.hos_2[i].male)+Number(data.hos_2[i].female))),
                    x: '65%',
                    y: '19%',
                    textStyle: {
                        color: '#98a0c4',
                        fontWeight: 'bolder',
                        fontSize: 20,
                    }
                },{
                    text: '男女统计分析',
                    x: '60%',
                    y: '7%',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bolder',
                        fontSize: 20,
                    }
                },{
                    text: '年龄段统计分析',
                    x: '60%',
                    y: '37%',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bolder',
                        fontSize: 20,
                    }
                },{
                    text: '孝感市地区覆盖率',
                    x: '60%',
                    y: '67%',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bolder',
                        fontSize: 20,
                    }
                }],
                dataZoom:[{
                    start: 0,
                    end: i*20,
                }, {},{
                    start: 0,
                    end: i*20,
                }, {}],
                series:[
                    {
                        data:xiaogan_map,
                        itemStyle:{
                            normal:{
                                borderColor:'rgba(100,149,237,1)',
                                borderWidth:0.5,
                                areaColor: 'rgba(30,144,255, 0.5)'
                            }
                        }
                    },
                    {
                        name: '各地区坐标',
                        tooltip:{
                            formatter:function(v){
                                return v.name+'<br />覆盖率 : '+v.value[2]+'%';
                            }
                        },
                        data: xiaogan_geo
                    },
                    {
                        name:'医院',
                        hos:data.hos_2[i].hos_nameTOP,
                        tooltip:{
                            formatter: function(v) {
                                var hos = myChart.getOption().series[2].hos;
                                return 'TOP'+(v.dataIndex+1)+'-'+hos[v.dataIndex]+' : '+v.value;
                            }
                        },
                        data: data.hos_2[i].hos_numTOP.length>10?data.hos_2[i].hos_numTOP.slice(0,10):data.hos_2[i].hos_numTOP
                    },
                    {
                        name:'科室',
                        dep:data.hos_2[i].dep_nameTOP,
                        tooltip:{
                            formatter: function(v) {
                                var dep = myChart.getOption().series[3].dep;
                                return 'TOP'+(v.dataIndex+1)+'-'+dep[v.dataIndex]+' : '+v.value;
                            }
                        },
                        data: data.hos_2[i].dep_numTOP.length>10?data.hos_2[i].dep_numTOP.slice(0,10):data.hos_2[i].dep_numTOP
                    },
                    {
                        name:'医生',
                        doc:data.hos_2[i].doc_nameTOP,
                        tooltip:{
                            formatter: function(v) {
                                var doc = myChart.getOption().series[4].doc;
                                return 'TOP'+(v.dataIndex+1)+'-'+doc[v.dataIndex]+' : '+v.value;
                            }
                        },
                        data: data.hos_2[i].doc_numTOP.length>10?data.hos_2[i].doc_numTOP.slice(0,10):data.hos_2[i].doc_numTOP
                    },
                    {
                        name:'年龄段统计',
                        tooltip:{
                            formatter: function(v) {
                                return v.name+' : '+v.percent+'%'+'<br />数量 : '+v.value+'人';
                            }
                        },
                        data:[
                            {value:age4[i], name:'青年'},
                            {value:age3[i], name:'老年'},
                            {value:age1[i], name:'儿童'},
                            {value:age2[i], name:'中年'}
                        ].sort(function (a, b) { return a.value - b.value})
                    },
                    {
                        name:'覆盖率',
                        tooltip:{
                            formatter: function(v) {
                                return v.name+' : '+v.value+'%';
                            }
                        },
                        data:[{value: data.hos_2[i].area, name: '覆盖率'}]
                    },
                    {
                        name:'男女比例内环',
                        data: [{
                            itemStyle: {
                                normal: {
                                    color: '#313443',
                                    shadowBlur: 10,
                                    shadowColor: '#1b1e25',
                                }
                            }
                        }]
                    },
                    {
                        name:'男女比例外环',
                        tooltip:{
                            formatter: function(v) {
                                return v.name+' : '+v.percent+'%'+'<br />数量 : '+v.value+'人';
                            }
                        },
                        data: [{
                            name:'女',
                            value: data.hos_2[i].female,
                            itemStyle: {
                                normal: {
                                    color: '#fb358a',
                                    shadowBlur: 10,
                                    shadowColor: '#fb358a'
                                }
                            }
                        }, {
                            name:'男',
                            value: data.hos_2[i].male,
                            itemStyle: {
                                normal: {
                                    //color: 'transparent'
                                    color: '#98a0c4',
                                    shadowBlur: 10,
                                    shadowColor: '#fb358a'
                                }
                            }
                        }]
                    },
                    {
                        name: '男',
                        data: male
                    },
                    {
                        name: '女',
                        data: female
                    },
                    {
                        name: '儿童',
                        data: age1
                    },{
                        name: '青年',
                        data: age4
                    },{
                        name: '中年',
                        data: age2
                    },{
                        name: '老年',
                        data: age3
                    },
                    {
                        data: radar_data
                    }
                ]
            });
        }

		myChart.hideLoading();

		echarts.registerMap('XIAOGAN', geoJson);

		myChart.setOption({baseOption : {
			timeline: {
				axisType: 'category',
				autoPlay: true,
				playInterval: 3000,
				orient: 'vertical',
				inverse: true,
				right: '0.5%',
				top: "5%",
				bottom: '5%',
				width: 60,
				data: times
			},
            title: [{
                text: '孝感市就医服务业务分析',
                backgroundColor:'rgba(30,144,255, 0.5)',
                //borderColor:'lightskyblue',
                padding:10,
                //borderWidth:1,
                textStyle : {
                    color: '#fff',
                    fontSize:60
                },
                x: '3%',
                y: '11%'
            }, {
                text: '就医服务数量TOP10',
                x: '9%',
                y: '30%',
                textAlign: 'center',
                textStyle : {
                    color: '#fff'
                }
            },{
                text: '男/女\n 7/3',
                x: '65%',
                y: '19%',
                textStyle: {
                    color: '#98a0c4',
                    fontWeight: 'bolder',
                    fontSize: 20,
                }
            },{
                text: '男女统计分析',
                x: '60%',
                y: '7%',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bolder',
                    fontSize: 20,
                }
            },{
                text: '年龄段统计分析',
                x: '60%',
                y: '37%',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bolder',
                    fontSize: 20,
                }
            },{
				text: '地区覆盖率',
				x: '60%',
				y: '67%',
				textStyle: {
					color: '#fff',
					fontWeight: 'bolder',
					fontSize: 20,
				}
			}],
            legend: [{
                selectedMode:'single',
                selected:{
                    '医院':true
                },
                data:['医院','科室','医生'],
                textStyle:{
                    color:'#fff'
                },
                top:'35%',
                left:'4%'
            },{
                orient:'vertical',
                data:['男','女'],
                textStyle:{
                    color:'#fff'
                },
                top:'8%',
                right:'25%'
            },{
                orient:'vertical',
                data:['儿童','青年','中年','老年'],
                textStyle:{
                    color:'#fff'
                },
                top:'38%',
                right:'24%'
            }],
            tooltip : {
                show:true,
                backgroundColor:'#384157',
                borderColor:'#384157',
                borderWidth:1,
                extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)',
            },
            toolbox : {
                feature:{
                    dataView:{
                        //readOnly:true,
                        optionToContent: function (opt) {
                            var current_time = opt.timeline[0].currentIndex;

                            //var hospital_num = opt.series[2].data;
							var hospital_num = data.hos_2[current_time].hos_numTOP;
							var alltables = '';
							alltables += '<div style="overflow-y: auto; height: 600px; float:left;margin-left:50px;">';
                            alltables += '<table border="1" ><tbody>'
								+'<caption>医院数量统计</caption>'
								+'<tr>'
								+'<td>排名</td><td>医院</td><td>数量/人</td>'
								+'</tr>';
                            for(var i=0;i<hospital_num.length;i++){
                                alltables+='<tr>'
                                          +'<td>'+'TOP'+(i+1)+'</td><td>'+data.hos_2[current_time].hos_nameTOP[i]+'</td><td>'+hospital_num[i]+'</td>'
                                          +'</tr>';
                            }
                            alltables += '</tbody></table>';
							alltables += '</div>';

                            //var department_num = opt.series[3].data;
							var department_num = data.hos_2[current_time].dep_numTOP;
							alltables += '<div style="overflow-y: auto; height: 600px; float:left;margin-left:50px;">';
                            alltables += '<table border="1" ><tbody>'
                                +'<caption>科室数量统计</caption>'
                                +'<tr>'
                                +'<td>排名</td><td>医院</td><td>科室</td><td>数量/人</td>'
                                +'</tr>';
                            for(var i=0;i<department_num.length;i++){
                                var deps=data.hos_2[current_time].dep_nameTOP[i].split(" ");
                                alltables+='<tr>'
                                    +'<td>'+'TOP'+(i+1)+'</td><td>'+deps[0]+'</td><td>'+deps[1]+'</td><td>'+department_num[i]+'</td>'
                                    +'</tr>';
                            }
                            alltables += '</tbody></table>';
							alltables += '</div>';

                            // var doctor_num = opt.series[4].data;
							var doctor_num = data.hos_2[current_time].doc_numTOP;
							alltables += '<div style="overflow-y: auto; height: 600px; float:left;margin-left:50px;">';
                            alltables += '<table border="1" ><tbody>'
                                +'<caption>医生数量统计</caption>'
                                +'<tr>'
                                +'<td>排名</td><td>医院</td><td>科室</td><td>医生</td><td>数量/人</td>'
                                +'</tr>';
                            for(var i=0;i<doctor_num.length;i++){
                                var deps=data.hos_2[current_time].doc_nameTOP[i].split(" ");
                                alltables+='<tr>'
                                    +'<td>'+'TOP'+(i+1)+'</td><td>'+deps[0]+'</td><td>'+deps[1]+'</td><td>'+deps[2]+'</td><td>'+doctor_num[i]+'</td>'
                                    +'</tr>';
                            }
                            alltables += '</tbody></table>';
							alltables += '</div>';
                            return alltables;
                        }
                    }
                },
                left: '23%',
                right: '75%',
                top: '30%',
                bottom: '2%'
            },
            dataZoom:[{
                show: true,
                height: 20,
                xAxisIndex: [
                    1
                ],
                bottom: '66%',
                start: 10,
                end: 40,
                handleSize: '110%',
                handleStyle:{
                    color:"#d3dee5",
                },
                textStyle:{
                    color:'#98a0c4'
                },
                borderColor:"#90979c"
            }, {
                type: "inside",
                show: true,
                xAxisIndex: [
                    1
                ],
                height: 15,
                start: 1,
                end: 35
            }, {
                show: true,
                height: 20,
                xAxisIndex: [
                    2
                ],
                bottom: '36%',
                start: 0,
                end: 100/6,
                handleSize: '110%',
                handleStyle:{
                    color:"#d3dee5",

                },
                textStyle:{
                    color:'#98a0c4'
                },
                borderColor:"#90979c"
            }, {
                type: "inside",
                show: true,
                xAxisIndex: [
                    2
                ],
                height: 15,
                start: 0,
                end: 35
            }],
            geo: {
                map: 'XIAOGAN',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                layoutCenter: ['45%', '50%'],
                layoutSize: 700,
                itemStyle:{
                    normal:{
                        borderColor:'rgba(100,149,237,1)',
                        borderWidth:0.5,
                        areaColor: '#1b1b1b'
                    }
                },
            },
            radar: [
                {
                    indicator: [
                        { text: '应城市' },
                        { text: '孝昌县' },
                        { text: '孝南区' },
                        { text: '云梦县' },
                        { text: '大悟县' },
                        { text: '安陆市' },
                        { text: '汉川市' }
                    ],
                    center: ['85%', '82%'],
                    radius: 80,
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    name: {
                        formatter:'【{value}】',
                        textStyle: {
                            color:'#72ACD1'
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['rgba(114, 172, 209, 0.2)',
                                'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                                'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                }
            ],
			xAxis : [
				{
					show : false
				},
                {
                    gridIndex: 2,
                    axisLabel: {
                        textStyle: {
                            color: '#98a0c4'
                        }
                    },
                    data : [2010,2011,2012,2013,2014,2015]
                },
                {
                    gridIndex: 5,
                    axisLabel: {
                        textStyle: {
                            color: '#98a0c4'
                        }
                    },
                    data : [2010,2011,2012,2013,2014,2015]
                }
			],
			yAxis : [
				{
					inverse : true,
					type : 'category',
                    axisLabel: {
                        textStyle: {
                            color: '#03a9f4'
                        }
                    },
					data : ['TOP1', 'TOP2', 'TOP3', 'TOP4', 'TOP5', 'TOP6', 'TOP7', 'TOP8', 'TOP9', 'TOP10']
				},{
                    // 辅助 x 轴
                    show: false,
                    data : ['TOP1', 'TOP2', 'TOP3', 'TOP4', 'TOP5', 'TOP6', 'TOP7', 'TOP8', 'TOP9', 'TOP10']
                },
                {
                    gridIndex: 2,
                    splitLine:{
                        show:false
                    },
                    axisLabel: {
                        textStyle: {
                            color:'#fb358a',
                        }
                    },
                },
                {
                    gridIndex: 5,
                    axisLabel: {
                        textStyle: {
                            color:'#fb358a',
                        }
                    },
                }
			],
			visualMap: {
				min: 0,
				max: 700,
				left: '25%',
				text:['High','Low'],
				calculable: true,
				seriesIndex: 0,
				color: ['blue','lightskyblue'],
				textStyle:{
					color:'#fff'
				}
			},
			grid: [{
				left: '4%',
				right: '75%',
				top: '40%',
				bottom: '2%',
                //show:true,
                borderColor:'#03a9f4',
                containLabel: true
			},{
                left: '60%',
                right: '5%',
                top: '7%',
                bottom: '65%',
                show:true,
                borderColor:'#03a9f4',
                containLabel: true
            },{
                left: '75%',
                right: '6%',
                top: '9%',
                bottom: '69%',
                //show:true,
                borderColor:'#03a9f4',
                containLabel: true
            },{
                left: '3%',
                right: '75%',
                top: '30%',
                bottom: '2%',
                show:true,
                borderColor:'#03a9f4',
                containLabel: true
            },{
                left: '60%',
                right: '5%',
                top: '37%',
                bottom: '35%',
                show:true,
                borderColor:'#03a9f4',
                containLabel: true
            },{
                left: '76%',
                right: '6%',
                top: '38%',
                bottom: '39%',
                //show:true,
                borderColor:'#03a9f4',
                containLabel: true
            },{
				left: '60%',
				right: '5%',
				top: '67%',
				bottom: '4%',
				show:true,
				borderColor:'#03a9f4',
				containLabel: true
			}],
			series: [
                {
                    name: '孝感市地图',
                    type: 'map',
                    mapType: 'XIAOGAN',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    layoutCenter: ['45%', '50%'],
                    layoutSize: 700,
                    itemStyle:{
                        normal:{
                            borderColor:'rgba(100,149,237,1)',
                            borderWidth:0.5,
                            areaColor: '#1b1b1b'
                        },
                        emphasis:{
                            areaColor: '#1A1A1A'
                        }
                    },
                    tooltip:{
                        formatter:function(v){
                            return v.name+'<br />就医服务人数 : '+v.value+'人';
                        }
                    }
                },
                {
                    name: '各地区坐标',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    layoutCenter: ['55%', '50%'],
                    symbolSize: function (val) {
                        return val[2] / 5;
                    },
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}',
                            textStyle:{
                                color:'#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    }
                },
				{
					name:'医院',
					type:'bar',
					barWidth:20,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: '#03a9f4',
                        }
                    },
                    label:{
                        normal:{
                            show: true,
                            position: "right",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
				},
                {
                    name:'科室',
                    type:'bar',
                    barWidth:20,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: '#03a9f4',
                            label: {
                                show: true,
                                position: "right",
                                formatter: function(p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                },
                {
                    name:'医生',
                    type:'bar',
                    barWidth:20,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: '#03a9f4',
                            label: {
                                show: true,
                                position: "right",
                                formatter: function(p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    }
                },
				{
					name:'年龄段统计',
					type:'pie',
					radius: ['10%', '20%'],
                    center: ['67%', '52%'],
					roseType: 'angle',
					label: {
						normal: {
                            //position:'inside',
							textStyle: {
								color: '#fff'
							}
						}
					},
					labelLine: {
						normal: {
							lineStyle: {
								color: 'rgba(255, 255, 255, 0.3)'
							},
							smooth: 0.2,
							length: 1,
							length2: 2
						}
					},
					itemStyle: {
						normal: {
							//color: '#c23531',
							shadowBlur: 200,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				},
				{
					name:'覆盖率',
					type:'gauge',
					min:0,
					max:100,
					splitNumber:10,
                    center: ['67%', '84%'],
					radius: '20%',
					axisLine: {            // 坐标轴线
						lineStyle: {       // 属性lineStyle控制线条样式
							color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
							width: 3,
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					axisLabel: {            // 坐标轴小标记
                        show:false,
						textStyle: {       // 属性lineStyle控制线条样式
							fontWeight: 'bolder',
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					axisTick: {            // 坐标轴小标记
						length :15,        // 属性length控制线长
						lineStyle: {       // 属性lineStyle控制线条样式
							color: 'auto',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					splitLine: {           // 分隔线
						length :25,         // 属性length控制线长
						lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
							width:3,
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					pointer: {           // 分隔线
						shadowColor : '#fff', //默认透明
						shadowBlur: 5
					},
					title : {
						textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
							//fontWeight: 'bolder',
							fontSize: 2,
							fontStyle: 'italic',
							color: '#fff',
							shadowColor : '#fff', //默认透明
							//shadowBlur: 10
						}
					},
                    detail:{
                        textStyle:{
                            fontSize:30
                        },
                        formatter: function(v) {
                            return v.toFixed(0)+'%';
                        }
                    }
				},
                {
					name:'男女比例内环',
                    type: 'pie',
                    radius: ['15%', '19%'],
                    center: ['67%', '22%'],
                    silent: true,
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    animation: false
                },
                {
					name:'男女比例外环',
                    type: 'pie',
                    radius: ['20%', '21%'],
                    center: ['67%', '22%'],
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    animationEasingUpdate: 'cubicInOut',
                    animationDurationUpdate: 500
                },
                {
                    name: '男',
                    type: 'bar',
                    xAxisIndex:1,
                    yAxisIndex:2,
                    itemStyle: {
                        normal: {
                            color: '#98a0c4',
                            label: {
                                show: true,
                                position: "top",
                                formatter: function (p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    smooth: true,
                    symbolSize: 10,
                    animation: false,
                    lineWidth: 1.2,
                    hoverAnimation: false,
                    symbol: 'circle'
                },
                {
                    name: '女',
                    type: 'bar',
                    xAxisIndex:1,
                    yAxisIndex:2,
                    areaStyle: {normal: {}},
                    itemStyle: {
                        normal: {
                            color:'#fb358a',
                            label: {
                                show: true,
                                position: "top",
                                formatter: function (p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    smooth: true,
                    symbolSize: 10,
                    animation: false,
                    lineWidth: 1.2,
                    hoverAnimation: false,
                    symbol: 'circle'
                },
                {
                    name: '儿童',
                    type: 'line',
                    xAxisIndex:2,
                    yAxisIndex:3,
                    smooth: true,
                    symbolSize: 10,
                    animation: false,
                    lineWidth: 1.2,
                    hoverAnimation: false,
                    symbol: 'circle'
                },{
                    name: '青年',
                    type: 'line',
                    xAxisIndex:2,
                    yAxisIndex:3,
                    smooth: true,
                    symbolSize: 10,
                    animation: false,
                    lineWidth: 1.2,
                    hoverAnimation: false,
                    symbol: 'circle'
                },{
                    name: '中年',
                    type: 'line',
                    xAxisIndex:2,
                    yAxisIndex:3,
                    smooth: true,
                    symbolSize: 10,
                    animation: false,
                    lineWidth: 1.2,
                    hoverAnimation: false,
                    symbol: 'circle'
                },{
                    name: '老年',
                    type: 'line',
                    xAxisIndex:2,
                    yAxisIndex:3,
                    smooth: true,
                    symbolSize: 10,
                    animation: false,
                    lineWidth: 1.2,
                    hoverAnimation: false,
                    symbol: 'circle'
                },
                {
                    name: '各地区覆盖率雷达图',
                    type: 'radar',
                    itemStyle: {
                        emphasis: {
                            // color: 各异,
                            lineStyle: {
                                width: 4
                            }
                        }
                    }
                }
			]
		},
		options : timelineoption
		});
	});
}