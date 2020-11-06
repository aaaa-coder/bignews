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
getCategoryList();

// function getcatelist() {
//     http.ajax({
//         type: "get",
//         url: "/admin/category/list",
//         success: function (response) {
//             // console.log(response);
//             const Ruchresa = template('gettemples', response);
//             $('#selCategory').html(Ruchresa);
//         }
//     });
// }
// getcatelist();
//查找信息
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
//定义一个当前页面的全局变量
let articlePage = 1;
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
            //将当前页面的页码进行保存
            articlePage = page;
            filter(page);
        }
    });
}


//删除文章
function delArticle(id) {
    http.ajax({
        type: 'post',
        url: "/admin/article/delete",
        data: { id },
        success: (res) => {
            //重新刷新该页的内容
            filter(articlePage);
        }
    })
}

