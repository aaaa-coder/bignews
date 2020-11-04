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
            $('#richText').val(content);
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

function getArticleContent() {
    tinymce.init({
        selector: "#richText"
    })
}

function articleImgChange() {

    const file = $('#inputCover')[0].files[0];
    // console.log(file);
    // console.log($('#inputCover')[0]);
    // console.log($('#inputCover')[0].files);
    const url = URL.createObjectURL(file);
    // const url = URL.createObjectURL(file);
    // console.log(url);
    $('.article_cover').prop('src', url);
}


//调用时间选择插件
getDate();
//调用内容插件
getArticleContent()
//调用获取类别方法
getArticleCategory()
//调取获取编辑内容方法
getEditArticle();