//获取所有分类
function getAll() {
    http.ajax({
        type: 'get',
        url: '/admin/category/list',
        success: function (response) {
            // console.log(response);
            const renterResult = template('getAllTemplate', response);
            $('#tbody').html(renterResult);
        }
    })
}
//删除分类
function delCategory(id) {
    http.ajax({
        type: 'post',
        url: '/admin/category/delete',
        data: { id },
        success: function (response) {
            if (response.code === 204) {
                console.log(response);
                alert(response.msg);
                getAll();
            }
        }
    })
}
getAll();