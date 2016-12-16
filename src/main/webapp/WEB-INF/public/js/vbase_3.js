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
	$('.time_wrap').hide();
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
		$('.time_wrap').hide();
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

		if($(this).data('no-init')) {
			$('.time_wrap').show();
		}else {
			$('.time_wrap').hide();
		}

		showLoading();

		$('.sub-item-wrap.active').removeClass('active');
		$(this).parent().addClass('active');

		var url = $('.sub-item-wrap.active .type').data('url');
		var params = {
			financial_type: "全经济类型"
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

	option = getCharts(data);

	myChart.setOption(option);

	hideLoading();
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