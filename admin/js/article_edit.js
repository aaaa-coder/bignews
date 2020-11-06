//文章编辑模块
function getEditArticle() {
  // console.log(location.search);
  const id = itcast.getArguments()['id'];
  http.ajax({
    type: 'get',
    url: '/admin/article/search',
    data: { id },
    success: (res) => {
      // console.log(res);
      if (res.code === 200) {
        let { title, cover, date, content, categoryId } = res.data;
        $('#inputTitle').val(title);
        $('#categoryFind').val(categoryId);
        $('.article_cover').prop('src', cover);
        $('#myDate').val(date);
        $('#articleContext').val(content);
      }
    }
  })
}

//获取文章类别
function getArticleCategory() {
  http.ajax({
    type: 'get',
    url: '/admin/category/list',
    success: (res) => {
      // console.log(res);
      const renderResult = template('categoryTemplate', res);
      $('.form-control.category').html(renderResult);
      getEditArticle();
    }
  })
}
//定义时间选择插件
function getInitAll() {
  jeDate('#myDate', {
    format: 'YYYY-MM-DD', // 显示格式
  });

  tinymce.init({
    selector: "#articleContext"
  })
}
getInitAll()


//图片回显
function articleImgChange() {
  const file = $('#inputCover')[0].files[0];
  const url = URL.createObjectURL(file);
  $('.article_cover').prop('src', url);
}
/**
 * 保存自己修改的数据
 * @param {*} state 表示发布还是草稿，根据这个，存到不同的地方
 */
function saveCategory(status) {
  //使用formData发送数据，可以直接拿到form表单的所有数据
  //然后  formData的属性，一定要和接口的属性名相同!!!!!!!!!!
  const formData = new FormData($('#form')[0]);
  const id = location.search.split('=')[1];
  // const id = itcast.getArguments()['id'];
  const content = tinymce.activeEditor.getContent();
  formData.append('id', id);
  formData.set('content', content);
  formData.append('state', status);
  for (let item of formData.entries()) {
    console.log(item);
  }
  // console.log(formData);
  // console.log(formData.id);
  http.ajax({
    type: 'post',
    url: '/admin/article/edit',
    data: formData,
    success: (res) => {
      alert(res.msg)
    }
  })
  return false;
}
getArticleCategory()

