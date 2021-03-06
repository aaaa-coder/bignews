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

function updateUserInfo() {
    const formData = new FormData($('#form')[0]);
    for (let item of formData) {
        console.log(item);
    }

    http.ajax({
        type: 'post',
        url: '/admin/user/edit',
        data: formData,
        success: function (res) {
            // console.log(res);
            $('.modal-body').text('信息修改完成');
            // 弹出模态框
            $('#loginModal').modal('show');
            // console.log(formData.get('nickname'));
            // const UserImgUrl = formData.get('userPic');
            const file = $('#exampleInputFile')[0].files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                $('#user_info_icon', parent.document).prop('src', url);
                $('#user_center_link_icon', parent.document).prop('src', url);
            }
            // console.log(UserImgUrl);
            // $('#user_info_icon', parent.document).prop('src', formData.get('src'));
            const nickname = formData.get('nickname');
            $('.sider .user_info span', parent.document).html('欢迎&nbsp;&nbsp;' + nickname);


        }
    })
    return false;
}
//头像预览
function previewUserIcon() {
    const file = $('#exampleInputFile')[0].files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        $('.col-sm-10 .user_pic').prop('src', url);
    }
}

getUserInfo();

