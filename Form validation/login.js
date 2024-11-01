document.getElementById('login').addEventListener('submit',function(event){
    event.preventDefault();
     
    var msg="";
    const storedname=localStorage.getItem('user');
    console.log(storedname);
    const storedpassword=localStorage.getItem('password');

    const user=document.getElementById('username').value.trim();
    const password=document.getElementById('pass').value.trim();
    var errb=document.getElementById('err');
   if(storedname!==user){
    msg=" Username Must be same";
   }
    if(storedpassword!==password){
    msg+=" Password must be same";
   }
   if(msg.length>0){
    errb.innerHTML=msg;
    errb.style.display="block";
   }
   else{
    msg="";
    errb.style.display="none";
    console.log("Successfullu login");
    alert("Sucssfully Login");
   }

})