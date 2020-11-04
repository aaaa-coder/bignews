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
            $('#date').val(date);
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

//调用获取类别方法
getArticleCategory()
//调取获取编辑内容方法
getEditArticle();