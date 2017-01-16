/**
 * Created by Allen on 2016/12/28.
 */
var timer = null; //主要用于仪表盘等定时器的句柄，每当新的展示需要重置操作

var year = 2009;

/**
 * 绑定不同类型查询的确定按钮
 */
hideLoading();
$(document).on('click', '.difCompany_wrap_big .search', function() {
    showLoading();
    clearInterval(timer);
    var industry_code = $('.industry_code').val();

    var url = 'charts/dif/difCompany';
    var params = {
        industry_code:industry_code
    }

    $.ajax({
        type: 'post',
        url: url,
        dataType: 'json',
        data: params,
        success: function(res) {
            showCharts(res);
        },
        error: function(err) {
            alert('获取数据出错，错误为：' + err);
        }
    });
});

$(document).on('click', '.difFinancial_wrap_big .search', function() {
    showLoading();
    clearInterval(timer);
    var industry_code = $('.industry_code').val();

    var url = 'charts/dif/difFinancial';
    var params = {
        industry_code:industry_code
    }

    $.ajax({
        type: 'post',
        url: url,
        dataType: 'json',
        data: params,
        success: function(res) {
            showCharts(res);
        },
        error: function(err) {
            alert('获取数据出错，错误为：' + err);
        }
    });
});

$(document).on('click', '.samCompany_wrap_big .search', function() {
    showLoading();
    clearInterval(timer);
    var company_type = $('.company_type').val();

    var url = 'charts/dif/samCompany';
    var params = {
        company_type:company_type
    }

    $.ajax({
        type: 'post',
        url: url,
        dataType: 'json',
        data: params,
        success: function(res) {
            showCharts(res);
        },
        error: function(err) {
            alert('获取数据出错，错误为：' + err);
        }
    });
});

$(document).on('click', '.samFinancial_wrap_big .search', function() {
    showLoading();
    clearInterval(timer);
    var financial_type = $('.financial_type').val();

    var url = 'charts/dif/samFinancial';
    var params = {
        financial_type:financial_type
    }

    $.ajax({
        type: 'post',
        url: url,
        dataType: 'json',
        data: params,
        success: function(res) {
            showCharts(res);
        },
        error: function(err) {
            alert('获取数据出错，错误为：' + err);
        }
    });
});

/*先输入数据*/
function showCharts(data) {

    year++;
    if(year > 2015) {
        year = 2010;
    }
    document.getElementById('time').innerHTML=year;

    bar1(year,data);
    bar2(year,data);
    bar3(year,data);
    bar4(year,data);
    bar5(year,data);
    bar6(year,data);
    pie1(year,data);
    pie2(year,data);
    pie3(year,data);
    news(year,data);
    //无动效数字插入
    //magic_number(year,data);
    //有动效
    value(year,data);
    showChartsTime(data);

}
/*设置延时*/
function showChartsTime(data) {
    setInterval(function() {

        //时间显示
        year++;
        if(year > 2015) {
            year = 2010;
        }


        document.getElementById('time').innerHTML=year;

        bar1(year,data);
        bar2(year,data);
        bar3(year,data);
        bar4(year,data);
        bar5(year,data);
        bar6(year,data);
        pie1(year,data);
        pie2(year,data);
        pie3(year,data);
        news(year,data);
        //无动效数字插入
        //magic_number(year,data);
        //有动效
        value(year,data);
    }, 10000);

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

