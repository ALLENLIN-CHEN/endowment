 var myChart;
 var option;
 var chartType;
 var timer = null; //主要用于仪表盘等定时器的句柄，每当新的展示需要重置操作
 var isInit = true; //用于初始化处理单独显示的div宽高获取不到的情况
 var isAreaChange = false; //用于判断是否切换了地区

$(function() {
	hideLoading();
	$('.right-content .single').css('visibility','visible');
	//myChart = echarts.init(document.getElementById('chartMain'));
/***********************************************************************************************************/	
	$(".tablesorter").tablesorter();

	//When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active ");//Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});

	$('.column').equalHeight();
/***********************************************************************************************************/
	
	//主题点击
	$('.item').on('click', function() {
		//清除定时器
		clearInterval(timer);
		
		$('.right-content .single').hide();
		$('.right-content .multi').show();
		$('.sub-item-wrap.active').removeClass('active');
		var self = $(this);
		if(!self.hasClass('active')) {
			$('.sub-' + $('.item.active').data('index')).slideToggle();
			$('.item.active').removeClass('active');
			self.addClass('active');
			$('.sub-' + self.data('index')).slideToggle();
		}
		
	//	setMultiCharts();
	});
	
	$(document).on('click', '.sub-item-wrap .type', function() {
		//清除定时器
		clearInterval(timer);
		if(myChart) {
			myChart.dispose();
		}
		myChart = echarts.init(document.getElementById('chartMain'));
//		if(isInit) {
//			//这样写是为了能够让echarts能够得到所设置的width，而不是使用默认的width。 设置完毕后进行hide隐藏掉
//			$('.right-content .single').css('visibility','visible').hide();
//			isInit = !isInit;
//		}
		
		if(!$('.company-wrap').is(':hidden')) {
			$('.company-wrap').hide();
		}
		
		showLoading();
		
		$('.sub-item-wrap.active').removeClass('active');
		$(this).parent().addClass('active');

		var url = $(this).data('url');
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			success: function(res) {
				handleCharts(res);
			},
			error: function(err) {
				alert('获取数据出错，错误为：' + err);
			}
		});
		
	});
	
	/**
	 * 绑定单位类型查询的确定按钮
	 */
	$(document).on('click', '.company-wrap .search', function() {
		showLoading();
		var type = $('.company-type').val();
		var age = {};
		var arr = [];
		var timeLineOptions = [];
		var cData = option.extended[type];
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

		option.baseOption.tooltip.formatter = type + "<br/>{b} : {c}%";
		option.options = timeLineOptions;

		myChart.setOption(option);
		hideLoading();
	});
	
	
	
	/*** 配置滚动条 ***/
	$(window).on("load",function(){
		$(".left-content").mCustomScrollbar({
			autoHideScrollbar:true,
			theme:"dark-thick"
		});
		
	});
	/*** 结束配置 ***/
});

/**
 * 用于展示echarts图表
 */
function handleCharts(data) {
	$('.right-content .single').show();
	
	chartType = data.type;
	
	option = getCharts(data);
	
	myChart.setOption(option);

	hideLoading();
	
	//非挂号年龄段分析时进行timeline函数的解绑
	myChart.off('timelinechanged',changeLegendShowByTimeLine);
	
	if(data.type === 'COMPANY_AGE_FUNNEL') {
		myChart.on('timelinechanged',changeLegendShowByTimeLine);
	} else if(data.type === 'COMPANY_TOP_BAR') {
		myChart.on('timelinechanged',changeLegendShowByTimeLine);
	} 
}

/**
 * 用于处理时间轴的为0的legend不显示的情况
 */
function changeLegendShowByTimeLine(timeLineData) {
	if(chartType === 'COMPANY_AGE_FUNNEL') {
		var legends = ['18-22岁','22-25岁','25-30岁','30-40岁','40-50岁','50岁以上'];
		var setting = {};
		var index = timeLineData.currentIndex;
		var sData = option.options[index].series[0].data;
		for(var i = 0; i < sData.length; i++) {
			if(!sData[i].value || sData[i].value <= 0) {
				setting[sData[i].name] = false;
			}else {
				setting[sData[i].name] = true;
			}
		}
		option.baseOption.legend.selected = setting;
		myChart.setOption(option);
	} else if(chartType === 'COMPANY_TOP_BAR') {
		var legends = [];
		var index = timeLineData.currentIndex;
		legends = option.extended[2010 + index];
		option.baseOption.xAxis[0].data = legends;
		myChart.setOption(option);
	} else if(chartType === 'REGISTER_BAR_DEPARTMENT_TOTAL') {
		var legends = [];
		var index = timeLineData.currentIndex + 2010;
		legends = option.extended.departments[index];
		option.baseOption.xAxis[0].data = legends;
		option.baseOption.tooltip.formatter = function(v) {
			var i = v[0].dataIndex;
			return option.extended.hospitals[index][i] + "-" + option.extended.departments[index][i] + "</br>数量: " + option.options[index-2010].series[0].data[i];
		};
		myChart.setOption(option);
	} else if(chartType === 'REGISTER_BAR_DOCTOR_TOTAL') {
		var legends = [];
		var index = timeLineData.currentIndex + 2010;
		legends = option.extended.doctors[index];
		option.baseOption.xAxis[0].data = legends;
		option.baseOption.tooltip.formatter = function(v) {
			var i = v[0].dataIndex;
			return option.extended.hospitalsAndDepartments[index][i] + '-' + option.extended.doctors[index][i] + "</br>数量: " + option.options[index-2010].series[0].data[i];
		};
		myChart.setOption(option);
	}
}

/*** loading动画 ***/
//加载loading
function showLoading() {
	$('.spinner').show();
}
//结束loading
function hideLoading() {
	$('.spinner').hide();
}
/*** 结束设置 ***/