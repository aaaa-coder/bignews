//文章编辑模块
function getEditArticle() {
    // console.log(location.search);
    const id = location.search.split('=')[1];
    http.ajax({
        type: 'get',
        url: '/admin/article/search',
        data: { id },
        success: (res) => {
            console.log(res);
            const { title, cover, date, content } = res.data;
            $('#inputTitle').val(title);
            $('.article_cover').prop('src', cover);
            $('#date').val(date);
            $('#content').val(content);
        }
    })
}
getEditArticle();