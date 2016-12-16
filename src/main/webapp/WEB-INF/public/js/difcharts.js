/**
 * 用于处理不同类型的图表
 */
function getCharts(data) {
	if(data.type === 'DifCompany') {
		return getDifCompany(data);
	}else if(data.type === 'DifFinancial') {
		return getDifFinancial(data);
	} else if(data.type === 'SamCompany') {
		return getSamCompany(data);
	} else if(data.type === 'SamFinancial') {
		return getSamFinancial(data);
	}
}
/***********************************/

/**
 * 生成各图表的方法
 */

function getDifCompany(data) {
	var timeLineOptions = [];
	var props = Object.getOwnPropertyNames(data.rank);
	var arr;
	var company_types = [];
	var allcompany_types = {};
	
	for(var index in props) {
		arr = [];
		yRank = data.rank[props[index]];
		allcompany_types[props[index]] = [];
		for(var i = 0; i < yRank.length; i++) {
			arr.push(yRank[i].sum);
			if(parseInt(index) === 0) {
				company_types.push(yRank[i].company_type);
			}
			
			allcompany_types[props[index]].push(yRank[i].company_type);
		}
		
		timeLineOptions.push({
			title : {
				subtext: props[index]
			},
			series: [
			   {
				  name: "年总量（元）",
				  label: {
	                normal: {
	                    show: true
	                }
				  },
				  data: arr
			   }
			]
		});
	}
	
	var option = {
			extended: allcompany_types,
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
					text: '同一行业不同单位类型'
				},
				tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
				toolbox: {
					feature: {
						dataView: {readOnly: true},
						restore: {},
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
			           data : company_types
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

function getDifFinancial(data) {
	var timeLineOptions = [];
	var props = Object.getOwnPropertyNames(data.rank);
	var arr;
	var financial_types = [];
	var allfinancial_types = {};

	for(var index in props) {
		arr = [];
		yRank = data.rank[props[index]];
		allfinancial_types[props[index]] = [];
		for(var i = 0; i < yRank.length; i++) {
			arr.push(yRank[i].sum);
			if(parseInt(index) === 0) {
				financial_types.push(yRank[i].financial_type);
			}

			allfinancial_types[props[index]].push(yRank[i].financial_type);
		}

		timeLineOptions.push({
			title : {
				subtext: props[index]
			},
			series: [
				{
					name: "年总量(元）",
					label: {
						normal: {
							show: true
						}
					},
					data: arr
				}
			]
		});
	}

	var option = {
		extended: allfinancial_types,
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
				text: '同一行业不同经济类型'
			},
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			toolbox: {
				feature: {
					dataView: {readOnly: true},
					restore: {},
					saveAsImage: {}
				}
			},
			dataZoom: [
				{
					type: 'inside'
				}
			],
			xAxis : [
				{
					type : 'category',
					axisTick : {show: false},
					axisLabel:{
						interval:0,
						rotate:30
					},
					data : financial_types
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
					}
				}
			]
		},
		options: timeLineOptions
	};

	return option;
}

function getSamCompany(data) {
	var timeLineOptions = [];
	var props = Object.getOwnPropertyNames(data.rank);
	var arr;
	var industry_codes = [];
	var allindustry_codes = {};

	for(var index in props) {
		arr = [];
		yRank = data.rank[props[index]];
		allindustry_codes[props[index]] = [];
		for(var i = 0; i < yRank.length; i++) {
			arr.push(yRank[i].sum);
			if(parseInt(index) === 0) {
				industry_codes.push(yRank[i].industry_code);
			}

			allindustry_codes[props[index]].push(yRank[i].industry_code);
		}

		timeLineOptions.push({
			title : {
				subtext: props[index]
			},
			series: [
				{
					name: "年总量（元）",
					label: {
						normal: {
							show: true
						}
					},
					data: arr
				}
			]
		});
	}

	var option = {
		extended: allindustry_codes,
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
				text: '不同行业同一单位类型'
			},
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			toolbox: {
				feature: {
					dataView: {readOnly: true},
					restore: {},
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
					data : industry_codes
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
					type: 'bar',
					itemStyle: {
						normal: {
							barBorderColor: '#FFD700',
							color: '#FFD700'
						},
						emphasis: {
							barBorderColor: '#FFD700',
							color: '#FFD700'
						}
					}
				}
			]
		},
		options: timeLineOptions
	};

	return option;
}

function getSamFinancial(data) {
	var timeLineOptions = [];
	var props = Object.getOwnPropertyNames(data.rank);
	var arr;
	var industry_codes = [];
	var allindustry_codes = {};

	for(var index in props) {
		arr = [];
		yRank = data.rank[props[index]];
		allindustry_codes[props[index]] = [];
		for(var i = 0; i < yRank.length; i++) {
			arr.push(yRank[i].sum);
			if(parseInt(index) === 0) {
				industry_codes.push(yRank[i].industry_code);
			}

			allindustry_codes[props[index]].push(yRank[i].industry_code);
		}

		timeLineOptions.push({
			title : {
				subtext: props[index]
			},
			series: [
				{
					name: "年总量（元）",
					label: {
						normal: {
							show: true
						}
					},
					data: arr
				}
			]
		});
	}

	var option = {
		extended: allindustry_codes,
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
				text: '不同行业同一经济类型'
			},
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			toolbox: {
				feature: {
					dataView: {readOnly: true},
					restore: {},
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
					data : industry_codes
				}
			],
			yAxis : [
				{
					type : 'value',
					splitLine:{
						show:false
					},
					splitArea:{
						show:true,
					},
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
					type: 'bar',
					itemStyle:{
						normal:{
							color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
						}
					}
				}
			]
		},
		options: timeLineOptions
	};

	return option;
}
