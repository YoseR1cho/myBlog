const modify_form = document.querySelector('.modify_form')
const id = modify_form.id;
// axios获取text数据
axios({
    url:'/api/'+id,
    headers: {
        'Content-Type': 'application/json'
    }
}).then(data=>{
    const mainText = data.data.data[0].text;
    editor.setHtml(mainText)
})

// button点击提交表单
function formSubmit(){
    if(confirm("您确定要修改编辑的文章吗：")==true){
        // wangEditor 更改隐藏表单内容
        const html = editor.getHtml();
        document.querySelector('.hidden_text').value = html;
        //提交表单
        document.querySelector('.post_container form').submit();
        return true;
    }else{return false;}
}