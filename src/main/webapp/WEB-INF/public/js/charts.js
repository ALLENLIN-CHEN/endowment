/**
 * 用于处理不同类型的图表
 */
function getCharts(data) {
	if(data.type === 'COMPANY_GENDER_LINE') {
		return getCompanyLine(data);
	} else if(data.type === 'COMPANY_AGE_FUNNEL') {
		$('.company-wrap').show();
		return getCompanyFunnel(data);
	} else if(data.type === 'COMPANY_TOP_BAR') {
		return getCompanyBar(data);
	} 
}
/***********************************/

/**
 * 生成各图表的方法
 */

function getCompanyLine(data) {
	var maleData = [];
	var femaleData = [];
	
	var keys = Object.getOwnPropertyNames(data.male);
	var index = 0;
	for(index = 0; index < keys.length; index++) {
		maleData.push(data.male[keys[index]].total);
		femaleData.push(data.female[keys[index]].total);
	}
	
	var option = {
	    title: {
	        text: '参保人数变化情况'
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        },
	        formatter: function(v) {
	        	var str = '';
	        	if(v.componentType === 'markPoint') {
	        		str = v.seriesName + '<br/>' + v.name + "：" + v.value + '人';
	        		return str;
	        	}
	        	var i = v[0].dataIndex;
	        	str = keys[i] + '年<br/>' + '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#c23531;margin-right:5px;"></span>男：' + maleData[i] + '人<br/>';
	        	str += '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#2f4554;margin-right:5px;"></span>女：' + femaleData[i] + '人<br/>';
	        	var cmtypes = data.male[2010 + i];
	        	var cfmtypes = data.female[2010 + i];
	        	ckeys = Object.getOwnPropertyNames(cmtypes);
	        	for(index = 0; index < ckeys.length; index++) {
	        		if(ckeys[index] !== 'total') {
	        			str += '&nbsp;-' + ckeys[index] + "：" + cmtypes[ckeys[index]] + '(男)&nbsp;' + cfmtypes[ckeys[index]] + '(女)<br/>';
	        		}
	        	}
	        	return  str;
	        }
	    },
	    legend: {
	    	data:['男', '女']
	    },
	    toolbox: {
	        feature: {
	        	 dataView: {readOnly: true},
	             saveAsImage: {}
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel:{
					formatter:function(value){
						return value + '人';
					}
				},
	        }
	    ],
	    series : [
	        {
	            name:'男',
	            type:'line',
	            markPoint: {
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ]
	            },
	            data: maleData
	        },
	        {
	            name:'女',
	            type:'line',
	            markPoint: {
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ]
	            },
	            data: femaleData
	        }
	    ]
	};
	
	return option;
}

function getCompanyFunnel(data) {
	$('.company-type').val('企业');
	var age = {};
	var arr = [];
	var timeLineOptions = [];
	var cData = data.range['企业'];
	var props = Object.getOwnPropertyNames(cData);
	var rangeDescs = [];
	for(var index in props) {
		age = cData[props[index]];
		arr = [];
		rangeDescs = Object.getOwnPropertyNames(age);
		for(var rindex in rangeDescs) {
			arr.push({
				name: rangeDescs[rindex],
				value: age[rangeDescs[rindex]]
			});
		}
		
		timeLineOptions.push({
			title : {text: props[index] + '年年龄段占比'},
			series: [
			   {
				  data: arr
			   }
			]
		});
	}
	
	var option = {
			extended: data.range,
			baseOption: {
				timeline: {
					axisType: 'category',
					autoPlay: true,
					playInterval: 2000,
					data: [
						'2010年','2011年','2012年','2013年','2014年','2015年'
					]
				},
				title: {
					text: '参保人员年龄占比统计'
				},
				tooltip: {
					trigger: 'item',
					formatter: "企业 <br/>{b} : {c}%"
				},
				toolbox: {
					feature: {
						dataView: {readOnly: true},
						restore: {},
						saveAsImage: {}
					}
				},
				legend: {
					 data: ['18-22岁','22-25岁','25-30岁','30-40岁','40-50岁','50岁以上']
				},
				calculable: true,
				series: [
			         {
			        	type: 'funnel'
			         }
				]
			},
			options: timeLineOptions
	};
	
	return option;
}

function getCompanyBar(data) {
	var timeLineOptions = [];
	var props = Object.getOwnPropertyNames(data.rank);
	var arr;
	var companies = [];
	var allCompanies = {};
	
	for(var index in props) {
		arr = [];
		yRank = data.rank[props[index]];
		allCompanies[props[index]] = [];
		for(var i = 0; i < yRank.length; i++) {
			arr.push(yRank[i].value);
			if(parseInt(index) === 0) {
				companies.push(yRank[i].key);
			}
			
			allCompanies[props[index]].push(yRank[i].key);
		}
		
		timeLineOptions.push({
			title : {text: props[index] + '年Top10单位类型统计'},
			series: [
			   {
				  name: "企业员工参保基数",
				  label: {
	                normal: {
	                    show: true
	                }
				  },
				  itemStyle: {
					  normal: {
						  color: '#5793f3'
					  }
				  
				  },
				  data: arr
			   }
			]
		});
	}
	
	var option = {
			extended: allCompanies,
			baseOption: {
				timeline: {
					axisType: 'category',
					autoPlay: true,
					playInterval: 3000,
                    orient: 'vertical',
                    inverse: true,
                    right: 10,
                    top: 150,
                    bottom: 10,
                    width: 60,
                    data: ['2010年','2011年','2012年','2013年','2014年','2015年']
                },
				title: {
					text: '参保基数排序统计'
				},
				tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        },
			        formatter: '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#5793f3;margin-right:5px;"></span>{a}<br/>{b} : {c}元'
			    },
				toolbox: {
					feature: {
						dataView: {readOnly: true},
						saveAsImage: {}
					}
				},
				xAxis : [
			       {
			           type : 'category',
			           axisTick : {show: false},
			           axisLabel:{
			        	  interval:0,
	                      rotate:30
	                   },
			           data : companies
			       }
			    ],
			    yAxis : [
			       {
			           type : 'value'
			       }
			    ],
				grid: {
			        left: '3%',
			        right: '7%',
			        containLabel: true
			    },
				calculable: true,
				series: [
			         {
			        	type: 'bar'
			         }
				]
			},
			options: timeLineOptions
	};
	
	return option;
}