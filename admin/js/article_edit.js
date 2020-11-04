//文章编辑模块
function getEditArticle() {
    // console.log(location.search);
    const id = location.search.split('=')[1];
    http.ajax({
        type: 'get',
        url: '/admin/article/search',
        data: { id },
        success: (res) => {
            // console.log(res);
            const { title, cover, date, content } = res.data;
            $('#inputTitle').val(title);
            $('.article_cover').prop('src', cover);
            $('#myDate').val(date);
            $('#content').val(content);
        }
    })
}

//获取文章类别
function getArticleCategory() {
    http.ajax({
        type: 'get',
        url: '/admin/category/list',
        success: (res) => {
            // console.log(res);
            const renderResult = template('categoryTemplate', res);
            $('.form-control.category').html(renderResult);
        }
    })
}
//定义时间选择插件
function getDate() {
    jeDate('#myDate', {
        format: 'YYYY-MM-DD', // 显示格式
    });
}
getDate();

//调用获取类别方法
getArticleCategory()
//调取获取编辑内容方法
getEditArticle();