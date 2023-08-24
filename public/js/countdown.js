// 倒计时函数
function countDown(){
    // 获取倒计时标签
    let time = document.querySelector('.countdown');

    if( time.innerHTML ==='1'){
        window.location.href = "/"
    }else{
        time.innerHTML--;
    }
}

window.setInterval(countDown,1000);
