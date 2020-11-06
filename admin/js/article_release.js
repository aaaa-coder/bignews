//初始化时间和富文本
function InitAllData() {
    jeDate('#myDate', {
        format: 'YYYY-MM-DD', // 显示格式
        isinitVal: true
    });

    tinymce.init({
        selector: "#articleContext"
    })
}
InitAllData();
//图片回显
function articleImgChange() {
    const file = $('#inputCover')[0].files[0];
    const url = URL.createObjectURL(file);
    $('.article_cover').prop('src', url);
}
//发表或者存为草稿
function savaCategory(state) {
    const formData = new FormData($('#form')[0]);
    const content = tinymce.activeEditor.getContent();
    for (let item of formData.entries()) {
        console.log(item);
    }
    formData.set('content', content);
    formData.append('state', state);
    http.ajax({
        type: 'post',
        url: '/admin/article/publish',
        data: formData,
        success: (res) => {
            // console.log(res.msg);
            alert(res.msg);
        }
    })
    return false;
}
//类别回显
function getArticleCategory() {
    http.ajax({
        type: 'get',
        url: '/admin/category/list',
        success: (res) => {
            // console.log(res);
            const renderResult = template('categoryTemplate', res);
            $('.form-control.category').html(renderResult);
            location.replace('./article_list.html')
        }
    })
}
//调用
getArticleCategory()