function getUserInfo() {
    const token = localStorage.getItem('token');
    $.ajax({
        type: "get",
        headers: { Authorization: token },
        url: "http://localhost:8080/api/v1/admin/user/detail",
        success: function (res) {
            const { username, nickname, email, userPic, password } = res.data;
            if (res.code === 200) {
                $('#username').val(username);
                $('#nickname').val(nickname);
                $('#email').val(email);
                $('.user_pic').prop('src', userPic);
                $('#password').val(password);
            }
        }, error: function (jqXHR) {
            if (jqXHR.status === 403) {
                parent.window.location.replace('./login.html');
            }
        }
    });
}
getUserInfo()