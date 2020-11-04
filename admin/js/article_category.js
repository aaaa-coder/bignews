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
let CatId;
//编辑功能
function updateCategory(item) {
    $('.add_category_wraper').show();
    $('#name').val(item.name);
    $('#slug').val(item.slug);
    CatId = item.id;
}

function hideEditCategory() {
    $('.add_category_wraper').hide();
    //将id与输入框内容初始化
    CatId = null;
    $('#name').val('');
    $('#slug').val('');
}

function saveEditCategory() {
    const id = CatId;
    const name = $('#name').val();
    const slug = $('#slug').val();
    // console.log(id);
    // console.log(name, slug);
    //因为共用一个模态框，通过判断是否有ID，判断是编辑还是新增，
    if (id) {
        http.ajax({
            type: 'post',
            url: "/admin/category/edit",
            data: { id, name, slug },
            success: function (res) {
                // console.log(res.msg);
                hideEditCategory();
                getAll();
            }
        })
    } else {
        http.ajax({
            type: 'post',
            url: '/admin/category/add',
            data: { name, slug },
            success: (res) => {
                hideEditCategory();
                getAll();
            }
        })
    }

}

function addCategory() {
    $('.add_category_wraper').show();
}
