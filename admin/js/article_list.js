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
function filter(page) {
    const id = $('#selCategory').val();
    const status = $('#selStatus').val();
    http.ajax({
        type: 'get',
        url: '/admin/article/query',
        data: { type: id, state: status, page },
        success: (res) => {
            // console.log(res);
            const renderResult = template('searchTemplate', res);
            $('tbody').html(renderResult);
            initPagination(res.data.totalPage);
        }
    })
}
filter(1);
// 4、初始化分页组件
function initPagination(total) {
    $('#pagination').twbsPagination({
        totalPages: total, // 总的页数
        visiblePages: 5, // 显示多少页
        first: '首页',
        last: '末页',
        prev: '上一页',
        next: '下一页',
        onPageClick: (event, page) => {
            filter(page);
        }
    });
}
getCategoryList();

