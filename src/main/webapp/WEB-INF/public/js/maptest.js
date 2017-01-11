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

	clearInterval(timer);
	if(myChart) {
		myChart.dispose();
	}
	myChart = echarts.init(document.getElementById('chartMain'));

	showLoading();

	$.ajax({
		type: 'GET',
		url: 'charts/base_3/test',
        dataType: 'json',
		success: function(res) {
            console.log(res);
            handleCharts(res['孝感市']);
		},
		error: function(err) {
			alert('获取数据出错，错误为：' + err);
		}
	});

    /*** 添加地图点击事件 ***/
    myChart.on('click',function(params){
        if(params.seriesName=='孝感市地图'){
            $.ajax({
                type: 'GET',
                url: 'charts/base_3/test',
                dataType: 'json',
                success: function(res) {
                    handleCharts(res[params.name]);
                },
                error: function(err) {
                    alert('获取数据出错，错误为：' + err);
                }
            });
        }
    });
	/***********************************************************************************************************/


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

	if(data.type!="test"){
		option = getCharts(data);

		myChart.setOption(option);
	}else {
		option = getCharts(data);
	}

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