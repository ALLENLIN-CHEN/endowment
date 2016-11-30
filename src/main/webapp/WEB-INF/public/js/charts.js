/**
 * 用于处理不同类型的图表
 */
function getCharts(data) {
	if(data.type === 'REGISTER_BAR_X') {
		return getRegisterBarX(data);
	} else if(data.type === 'REGISTER_LINE') {
		return getRegisterLine(data);
	}
}
/***********************************/

/**
 * 生成各图表的方法
 */
// 以X轴为值轴
function getRegisterBarX(data) {
	var option = {
			title: {
		        text: '男女挂号比例'
		    },
			tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
		    xAxis : [
	             {
	                 type : 'value'
	             }
	        ],
		    yAxis : [
		        {
		            type : 'category',
		            axisTick : {show: false},
		            data : ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年']
		        }
		    ],
		    series : [
		        {
		            name:'男',
		            type:'bar',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'inside'
		                }
		            },
		            data: data.male
		        },
		        {
		            name:'女',
		            type:'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true
		                }
		            },
		            data: data.female
		        }
		    ]
		};
	
	return option;
}


function getRegisterLine(data) {
	var option = {
	    title: {
	        text: '男女挂号人数统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	    	data:['男', '女']
	    },
	    toolbox: {
	        feature: {
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
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'男',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {}},
	            data: data.male
	        },
	        {
	            name:'女',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {}},
	            data: data.female
	        }
	    ]
	};
	
	return option;
}