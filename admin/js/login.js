
function login() {
    const username = $('.input_txt').val();
    const password = $('.input_pass').val();
    if (username && password) {
        http.ajax({
            type: 'post',
            url: "/admin/user/login",
            data: { username, password },
            success: function (res) {
                if (res.code === 200) {
                    localStorage.setItem('token', res.token);
                    location.replace('./index.html');
                } else {
                    $('.modal-body').text('用户名或密码错误');
                    // 弹出模态框
                    $('#loginModal').modal('show');
                }
            },
        })
    }
    else {
        $('.modal-body').text('用户名和密码不能为空');
        // 弹出模态框
        $('#loginModal').modal('show');
    }
}
