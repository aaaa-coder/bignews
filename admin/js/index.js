function getUserInfo() {
    const token = localStorage.getItem('token');
    $.ajax({
        type: "get",
        headers: { Authorization: token },
        url: "http://localhost:8080/api/v1/admin/user/info",
        success: function (res) {
            const { nickname, userPic } = res.data;
            $('#user_info_icon').prop('src', userPic);
            $('#user_center_link_icon').prop('src', userPic);
            $('#user_info_name').html('欢迎&nbsp;&nbsp;' + nickname);
        }
    });
}

getUserInfo();