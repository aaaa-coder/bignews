function getCategoryList() {
    http.ajax({
        type: 'get',
        url: '/admin/category/list',
        success: (res) => {
            // console.log(res);
            const renderResult = template('categoryTemplate', res);
            $('#selCategory').html(renderResult);
        }
    })
}
function filter() {
    const id = $('#selCategory').val();
    const status = $('#selStatus').val();
    http.ajax({
        type: 'get',
        url: '/admin/article/query',
        data: { type: id, state: status },
        success: (res) => {
            console.log(res);
            const renderResult = template('searchTemplate', res);
            $('tbody').html(renderResult);
        }
    })
}
getCategoryList();