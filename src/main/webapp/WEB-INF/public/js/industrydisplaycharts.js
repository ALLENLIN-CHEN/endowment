var div=document.getElementById('display');

myChart = echarts.init(div);
var option;
$.ajax({
    type: 'GET',
    url:"charts/industry/getThemeOption",
    dataType: 'json',
    success: function(res) {
        option=handleCharts(res.data);
        myChart.setOption(option);
    },
    error: function(err) {
        alert('获取数据出错，错误为：' + err);
    }
});

window.onresize=function(){ location=location };