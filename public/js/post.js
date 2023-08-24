window.onload=()=>{
    const html = localStorage.getItem('text-article')?localStorage.getItem('text-article'):'<p><br></p>'  //string
    editor.setHtml(html);

}
// 提交按钮点击事件处理
function formSubmit(){
    // wangEditor 更改隐藏表单内容
    const html = editor.getHtml();
    document.querySelector('.hidden_text').value = html;

    //提交表单
    document.querySelector('.post_container form').submit();

    //提交表单后删除localStorage中的数据
    localStorage.removeItem('text-article');
}

