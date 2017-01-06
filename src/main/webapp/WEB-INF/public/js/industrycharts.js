/**
 * 用于处理不同类型的图表
 */
function getCharts(data) {
	if(data.type === 'INDUSTRY_LINE') {
		return getIndustryLine(data);
	} else if(data.type === 'INDUSTRY_FUNNEL') {
		// $('.company-wrap').show();
		return getIndustryFunnel(data);
	} else if(data.type === 'INDUSTRY_BAR') {
		return getIndustryBar(data);
	} 
}
/***********************************/

/**
 * 生成各图表的方法
 */

function getIndustryLine(res) {


	var maleData = [];
	var femaleData = [];
	var sumData=[];
	var categoryData=[];
	var totallist=res.data.industrylist;
	var industryname=res.data.industry_code;
	console.log(industryname);
	var index = 0;
	var temp=0;
	for(index = 0; index < totallist.length; index++) {
        var item=totallist[index];
		if(item.sex=="男"){
			maleData.push(item.person_num);
			sumData.push(item.person_num+temp);
			// console.log(temp);
			categoryData.push(item.year+"年");
		}
		else {
			femaleData.push(item.person_num);
			temp=item.person_num;
		}
	}
	
	var option = {
	    title: {
	        text: '各行业参保人数变化情况',
			subtext:industryname
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	    	data:['男', '女',"人数"]
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
	            data: categoryData
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
	        },
			{
				name:'人数',
				type:'line',
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				},
				data: sumData
			}
	    ]
	};
	
	return option;
}

function getIndustryFunnel(res) {
	var data=res.data;
	var timeLineOptions = [];
	var industryname=res.data.industry_code
	var yearlist=[];
	// console.log(data);
	for(var index in data.yearlist) {
		var industryModellist=data.industrymap[data.yearlist[index]];
		var datalist=[];
		var temp_sum=data.sumlist[index];
		for(var i = 0; i < industryModellist.length; i++) {
			datalist.push({
				name:industryModellist[i].age,
				value:(industryModellist[i].person_num/temp_sum*100).toFixed(2)});
		}
		yearlist.push(data.yearlist[index]+"年");
		timeLineOptions.push({
			title : {text: yearlist[index] + '各行业参保人员年龄段占比'},
			series: [
			   {
				  data: datalist
			   }
			]
		});
	}
	
	var option = {
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
					data: yearlist
				},
				title: {
					text: '参保人员年龄占比统计',
					subtext:industryname
				},
				tooltip: {
					trigger: 'item',
					formatter: "{b} : {c}%"
				},
				toolbox: {
					feature: {
						dataView: {readOnly: true},
						restore: {},
						saveAsImage: {}
					}
				},
				legend: {
					 data: ["18岁—22岁", "22岁—25岁", "25岁—30岁", "30岁—40岁","40岁—50岁","50岁以上"],
					// left:'left',
					top:"bottom",
					// orient:'vertical'
				},
				calculable: true,
				series: [
			         {
			        	type: 'funnel',
						 label: {
						 	normal: {
							 	formatter: function (params) {
								 return params.name + ": " + params.value + '%';
							 	},
								 position: 'center',
								textStyle:{
									fontSize: 16,
									// color:'#00a2ca'
								}
						 	}
					 	}
			         }

				]
			},
			options: timeLineOptions
	};
	
	return option;
}

function getIndustryBar(res) {
	var data=res.data;
	var timeLineOptions = [];
	var yearlist=[];
	// console.log(data);
	for(var index in data.yearlist) {
		var industryModellist=data.industrymap[data.yearlist[index]];
		var categorylist=[],datalist=[];
		for(var i = 0; i < Math.min(industryModellist.length,10); i++) {
			categorylist.push(industryModellist[i].industry_code);
			datalist.push(industryModellist[i].cardinality);
		}
		yearlist.push(data.yearlist[index]+"年");
		timeLineOptions.push({
			industryModellist:industryModellist,
			title : {text: yearlist[index]+'各行业参保基数TOP10'},
			yAxis : [
				{
					type : 'category',
					data : categorylist
				}
			],
			series: [
			   {
				  name: "参保基数",
				  label: {
	                normal: {
	                    show: true,
						position:"right"
	                }
				  },
				  itemStyle: {
					  normal: {
						  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							  offset: 0,
							  color: 'lightBlue' // 0% 处的颜色
						  }, {
							  offset: 1,
							  color: '#3398DB' // 100% 处的颜色
						  }], false)
					  }
				  
				  },
				  data: datalist
			   }
			]
		});
	}


	var option = {
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
                    data:yearlist
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
						// dataView: {readOnly: true},
						dataView : {
							show : true,
							title : '数据视图',
							readOnly: true,
							lang : ['数据视图', '关闭', '刷新'],
							optionToContent: function(opt) {
								var industryModellist = opt.industryModellist;
								var table = '<div style="width:100%; height:100%; overflow:auto;"><table border="1px" align="left" cellspacing="0" cellpadding="0" style="width:600px;text-align:center;background:#ccccccc"><tbody><tr style="background:#1e90ff">'
									+ '<td width="40px">No</td>'
									+ '<td width="70px">行业名称</td>'
									+ '<td width="70px">行业参保基数(元) </td>'
									+ '</tr>';
								for (var i = 0, l = industryModellist.length; i < l; i++) {
									table += '<tr>'
										+ '<td>' + (i+1) + '</td>'
										+ '<td>' + industryModellist[i].industry_code + '</td>'
										+ '<td>' + industryModellist[i].cardinality + '</td>'
										+ '</tr>';
								}
								table += '</tbody></table></div>';
								return table;
							}
						},
						saveAsImage: {}
					}
				},
				yAxis : [
			       {
			           type : 'category',

			           axisTick : {show: false},
					   inverse:true
                       // axisLabel:{
			        	//   interval:0,
	                   //    rotate:30
	                   // }
			       }
			    ],
			    xAxis : [
			       {
			           type : 'value',
					   position: 'top',
					   scale: true,
					   splitLine: {show: false},
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