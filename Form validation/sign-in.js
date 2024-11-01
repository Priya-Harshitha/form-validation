document.getElementById('btn').addEventListener('submit',function(event){
    event.preventDefault();
    

    const name=document.getElementById('name').value.trim();
    const mail=document.getElementById('email').value.trim();
    const phno=document.getElementById('phone').value.trim();
    const pass=document.getElementById('pass').value.trim();
    const cpass=document.getElementById('confirm').value.trim();
    var ebox = document.getElementById('errorbox');
    var errorMessage="";
    if(name==='' && mail==='' && phno==='' && pass==='' && cpass==='')
    {
      errorMessage=" Every feild is to be filled in this form";
    }
    else{
        if(name===''){
            errorMessage+=" Name is required!";
        }
        if(mail===''){
            errorMessage+=" Mail is required!";
        }
        if(phno===''){
            errorMessage+=" Phone Number is required!";
        }
        if(pass===''){
            errorMessage+=" Password is required!";
        }
        if(cpass===''){
            errorMessage+=" Password confirmation is required!";
        }
    }

        if((phno.length>0 && phno.length<10) || phno.length>10){
            errorMessage+=" In Valid Phone number  !";
        }
        if(pass.length>0 && pass.length<8){
            errorMessage+=" Password must be 8 characters";
        }
        else if(pass.length>8){
            errorMessage+=" Password must not exceed 8 characters";
        }
        if(mail.length>0 && !validateEmail(mail)){
            errorMessage+=" Invalid Email format";
        }

        if(pass!==cpass){
            errorMessage+=" Password and Confirm Password must be same";
        }

        if(errorMessage.length>0){
            console.log(errorMessage);
            ebox.innerHTML=errorMessage;
            ebox.style.display="block";
        }
        else{
            errorMessage="";
            ebox.style.display='none';
            localStorage.setItem('user',name);
            localStorage.setItem('email',mail);
            localStorage.setItem('number',phno);
            localStorage.setItem('password',pass);
            window.location.href="login.html";
        }
});

function validateEmail(mail){
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(mail);
}

