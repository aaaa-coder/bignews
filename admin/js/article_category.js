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
getAll();