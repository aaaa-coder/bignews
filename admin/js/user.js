function getUserInfo() {
    http.ajax({
        type: "get",
        url: '/admin/user/detail',
        success: function (res) {
            const { username, nickname, email, userPic, password } = res.data;
            if (res.code === 200) {
                $('#username').val(username);
                $('#nickname').val(nickname);
                $('#email').val(email);
                $('.user_pic').prop('src', userPic);
                $('#password').val(password);
            }
        }
    })
}
getUserInfo();

function updateUserInfo() {

}