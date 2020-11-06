//获取用户评论
function getUserComment(page) {
    http.ajax({
        type: 'get',
        url: '/admin/comment/search',
        data: { page },
        success: (res) => {
            if (res.code === 200) {
                // console.log(res);
                const renderResult = template('commentTemplate', res);
                $('tbody').html(renderResult);
                initPagination(res.data.totalPage);
            }
        }
    })
}
getUserComment();
//定义全局页数
let commentPage = 1;
//初始化页数
function initPagination(total) {
    $('#pagination').twbsPagination({
        totalPages: total, // 总的页数
        visiblePages: 5, // 显示多少页
        first: '首页',
        last: '末页',
        prev: '上一页',
        next: '下一页',
        onPageClick: (event, page) => {
            // console.log(this);
            commentPage = page;
            getUserComment(commentPage);
        }
    });
}
//改变评论的状态
function changeCommentStatus(id, action) {
    const urls = { pass: '/admin/comment/pass', reject: '/admin/comment/reject', delete: '/admin/comment/delete' };
    http.ajax({
        type: 'post',
        url: urls[action],
        data: { id },
        success: (res) => {
            // console.log(res);
            getUserComment(commentPage);
        }
    })
}