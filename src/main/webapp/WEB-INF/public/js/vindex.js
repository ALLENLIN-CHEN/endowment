 var myChart;

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
		//clearInterval(timer);
		
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
		//clearInterval(timer);
		
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
	
	//这样写是为了能够让echarts能够得到所设置的width，而不是使用默认的width。 设置完毕后进行hide隐藏掉
	$('.right-content .single').css('visibility','visible').hide();
	
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
	hideLoading();
	
	var option = getCharts(data);
	
	myChart.setOption(option);
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