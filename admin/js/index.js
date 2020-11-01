//获取用户信息
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
        },
        error: function (jqXHR, status) {
            // console.log(jqXHR);
            // console.log(status); error 
            if (jqXHR.status === 403) {
                location.replace('./login.html');
            }
        }
    });
}

getUserInfo();
//用户退出
function loginOut() {
    localStorage.removeItem('token');
    location.replace('./login.html');
}
//实现左边点击下拉的效果
function article_slide() {
    $('.menu .level02').slideToggle();
    if ($('#level01_slide span').html().indexOf('文章管理') > -1) {
        //循环添加类名，实现箭头转动
        $('#level01_slide .icon-arrowdownl').toggleClass('rotate0');
    }

}

$('.menu .level01').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
})

$('.menu .level02>li').on('click', function () {
    // console.log($(this));
    // console.log($(this).find('a'));
    //因为active类名下才是a  所以需要给li加类名
    $(this).addClass('active').siblings().removeClass('active')
})


