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
		timeLineOptions.push({
			name:'男',
			type:'line',
			smooth:true,
			symbolSize:10,
			animation:false,
			lineWidth:1.2,
			hoverAnimation:false,
			symbol:'circle',
			data: data.financial_type[index].male
		});
		timeLineOptions.push({
			name:'女',
			type:'line',
			smooth:true,
			symbolSize:10,
			animation:false,
			lineWidth:1.2,
			hoverAnimation:false,
			symbol:'circle',
			data: data.financial_type[index].female
		});
	}

	var option = {
		title: {
			text: '各经济类型参保人数男女变化'
		},
		dataZoom: [
			{
				type: 'inside'
			}
		],
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
				return v.name+'年'+data.financial_type[i].financial_name+'-'+v.seriesName+':'+v.value;
			}
		},
		legend: {
			data:['男', '女']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
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
					type: 'funnel'
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
				top: 150,
				bottom: 10,
				width: 60,
				data: times
			},
			grid: {
				left: '3%',
				right: '7%',
				containLabel: true
			},
			dataZoom: [
				{
					type: 'inside'
				}
			],
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
				bottom: '3%',
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

/**
 * 绑定经济类型查询的确定按钮
 */
$(document).on('click', '.time_wrap .financial_search', function() {
	showLoading();

	var financial = $('.startTime').val();

	var url = $('.sub-item-wrap.active .type').data('url');
	var params = {
		financial_type: financial,
	}

	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'json',
		data: params,
		success: function(res) {
			handleCharts(res);
		},
		error: function(err) {
			alert('获取数据出错，错误为：' + err);
		}
	});
});