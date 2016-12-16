 var myChart;
 var option;
 var chartType;
 var timer = null; //主要用于仪表盘等定时器的句柄，每当新的展示需要重置操作
 var isInit = true; //用于初始化处理单独显示的div宽高获取不到的情况
 var isAreaChange = false; //用于判断是否切换了地区

$(function() {
	hideLoading();
	
	myChart = echarts.init(document.getElementById('chartMain'));
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
		$('.sub-item-wrap1.active').removeClass('active');
		$('.sub-item-wrap2.active').removeClass('active');
		$('.sub-item-wrap3.active').removeClass('active');
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
		myChart.dispose();
		myChart = echarts.init(document.getElementById('chartMain'));
		if(isInit) {
			//这样写是为了能够让echarts能够得到所设置的width，而不是使用默认的width。 设置完毕后进行hide隐藏掉
			$('.right-content .single').css('visibility','visible').hide();
			isInit = !isInit;
		}
		
		showLoading();
		
		$('.sub-item-wrap1.active').removeClass('active');
		$('.sub-item-wrap2.active').removeClass('active');
		$('.sub-item-wrap3.active').removeClass('active');
		$(this).parent().addClass('active');

		if(!$('.difCompany_wrap').is(':hidden')) {
			$('.difCompany_wrap').hide();
		}

		if(!$('.difFinancial_wrap').is(':hidden')) {
			$('.difFinancial_wrap').hide();
		}

		if(!$('.samCompany_wrap').is(':hidden')) {
			$('.samCompany_wrap').hide();
		}

		if(!$('.samFinancial_wrap').is(':hidden')) {
			$('.samFinancial_wrap').hide();
		}
		
		if(!$(this).data('no-init1')) {
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
		}else {
			hideLoading();
			$('.difCompany_wrap').show();
			$('.difFinancial_wrap').hide();
			$('.samCompany_wrap').hide();
			$('.samFinancial_wrap').hide();
		}
	});

	$(document).on('click', '.sub-item-wrap1 .type', function() {
		//清除定时器
		clearInterval(timer);
		myChart.dispose();
		myChart = echarts.init(document.getElementById('chartMain'));
		if(isInit) {
			//这样写是为了能够让echarts能够得到所设置的width，而不是使用默认的width。 设置完毕后进行hide隐藏掉
			$('.right-content .single').css('visibility','visible').hide();
			isInit = !isInit;
		}

		showLoading();

		$('.sub-item-wrap.active').removeClass('active');
		$('.sub-item-wrap2.active').removeClass('active');
		$('.sub-item-wrap3.active').removeClass('active');
		$(this).parent().addClass('active');

		if(!$('.difCompany_wrap').is(':hidden')) {
			$('.difCompany_wrap').hide();
		}

		if(!$('.difFinancial_wrap').is(':hidden')) {
			$('.difFinancial_wrap').hide();
		}

		if(!$('.samCompany_wrap').is(':hidden')) {
			$('.samCompany_wrap').hide();
		}

		if(!$('.samFinancial_wrap').is(':hidden')) {
			$('.samFinancial_wrap').hide();
		}

		if(!$(this).data('no-init2')) {
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
		}else {
			hideLoading();
			$('.difCompany_wrap').hide();
			$('.difFinancial_wrap').show();
			$('.samCompany_wrap').hide();
			$('.samFinancial_wrap').hide();
		}
	});

	$(document).on('click', '.sub-item-wrap2 .type', function() {
		//清除定时器
		clearInterval(timer);
		myChart.dispose();
		myChart = echarts.init(document.getElementById('chartMain'));
		if(isInit) {
			//这样写是为了能够让echarts能够得到所设置的width，而不是使用默认的width。 设置完毕后进行hide隐藏掉
			$('.right-content .single').css('visibility','visible').hide();
			isInit = !isInit;
		}

		showLoading();

		$('.sub-item-wrap.active').removeClass('active');
		$('.sub-item-wrap1.active').removeClass('active');
		$('.sub-item-wrap3.active').removeClass('active');
		$(this).parent().addClass('active');

		if(!$('.difCompany_wrap').is(':hidden')) {
			$('.difCompany_wrap').hide();
		}

		if(!$('.difFinancial_wrap').is(':hidden')) {
			$('.difFinancial_wrap').hide();
		}

		if(!$('.samCompany_wrap').is(':hidden')) {
			$('.samCompany_wrap').hide();
		}

		if(!$('.samFinancial_wrap').is(':hidden')) {
			$('.samFinancial_wrap').hide();
		}

		if(!$(this).data('no-init3')) {
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
		}else {
			hideLoading();
			$('.difCompany_wrap').hide();
			$('.difFinancial_wrap').hide();
			$('.samCompany_wrap').show();
			$('.samFinancial_wrap').hide();
		}
	});

	$(document).on('click', '.sub-item-wrap3 .type', function() {
		//清除定时器
		clearInterval(timer);
		myChart.dispose();
		myChart = echarts.init(document.getElementById('chartMain'));
		if(isInit) {
			//这样写是为了能够让echarts能够得到所设置的width，而不是使用默认的width。 设置完毕后进行hide隐藏掉
			$('.right-content .single').css('visibility','visible').hide();
			isInit = !isInit;
		}

		showLoading();

		$('.sub-item-wrap.active').removeClass('active');
		$('.sub-item-wrap1.active').removeClass('active');
		$('.sub-item-wrap2.active').removeClass('active');
		$(this).parent().addClass('active');

		if(!$('.difCompany_wrap').is(':hidden')) {
			$('.difCompany_wrap').hide();
		}

		if(!$('.difFinancial_wrap').is(':hidden')) {
			$('.difFinancial_wrap').hide();
		}

		if(!$('.samCompany_wrap').is(':hidden')) {
			$('.samCompany_wrap').hide();
		}

		if(!$('.samFinancial_wrap').is(':hidden')) {
			$('.samFinancial_wrap').hide();
		}

		if(!$(this).data('no-init4')) {
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
		}else {
			hideLoading();
			$('.difCompany_wrap').hide();
			$('.difFinancial_wrap').hide();
			$('.samCompany_wrap').hide();
			$('.samFinancial_wrap').show();
		}
	});

	
	/**
	 * 绑定不同类型查询的确定按钮
	 */
	$(document).on('click', '.difCompany_wrap .search', function() {
		showLoading();

		var industry_code = $('.industry_code').val();
		
		var url = $('.sub-item-wrap.active .type').data('url');
		var params = {
				industry_code:industry_code
		}

		$.ajax({
			type: 'post',
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

	$(document).on('click', '.difFinancial_wrap .search', function() {
		showLoading();

		var industry_code = $('.difFinancial_wrap .industry_code').val();

		var url = $('.sub-item-wrap1.active .type').data('url');
		var params = {
			industry_code:industry_code
		}

		$.ajax({
			type: 'post',
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

	$(document).on('click', '.samCompany_wrap .search', function() {
		showLoading();

		var company_type = $('.company_type').val();

		var url = $('.sub-item-wrap2.active .type').data('url');
		var params = {
			company_type:company_type
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

	$(document).on('click', '.samFinancial_wrap .search', function() {
		showLoading();

		var financial_type = $('.financial_type').val();

		var url = $('.sub-item-wrap3.active .type').data('url');
		var params = {
			financial_type:financial_type
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
		$(".right-content.difCompany_wrap").mCustomScrollbar({
			autoHideScrollbar:true,
			theme:"dark-thick"
		});
		$(".right-content.difFinancial_wrap").mCustomScrollbar({
			autoHideScrollbar:true,
			theme:"dark-thick"
		});
		$(".right-content.samCompany_wrap").mCustomScrollbar({
			autoHideScrollbar:true,
			theme:"dark-thick"
		});
		$(".right-content.samFinancial_wrap").mCustomScrollbar({
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