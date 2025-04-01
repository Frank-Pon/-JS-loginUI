let user = {'username':'aaa123','pw':'a123456'};
const account = document.getElementById('user');
const password = document.getElementById('pw');
const result = document.getElementById('result');
const butt = document.getElementById('login');
const title = document.getElementById('title');
butt.addEventListener('click',click);
let is_Error = false;
let log_success = false;
let get = false;
function click(){
    if(log_success){
        account.style.display = 'block';
        password.style.display = 'block';
        result.style.color = 'Black';
        account.value = '';
        password.value = '';
        result.innerText = log_success? `${user.username}已登出`:'';
        title.innerText = '登入介面';
        title.style.color = 'Black';
        butt.innerText = '登入';
        is_Error = false;
        log_success = false;
        return;
    }
    
    if(account.value == user.username && password.value == user.pw){
        result.innerHTML = `${user.username} 登入成功!<br>歡迎您`;
        title.innerText = '登入成功';
        title.style.color = 'Green';
        result.style.color = 'Green';
        account.style.display = 'none';
        password.style.display = 'none';
        butt.innerText = '登出';
        log_success = true;
        get = true;
    }else if (account.value == '' || password.value == ''){
        result.innerText = '帳號、密碼不可空白';
        result.style.color = 'Red';
    }
    else{
        result.innerText = '帳號或密碼錯誤';
        result.style.color = 'Red';
        butt.innerText = '返回';
        is_Error = true;
    }
}