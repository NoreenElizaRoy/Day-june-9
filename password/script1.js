function togglePassword()
{
    const passwordvalue=document.getElementById("password");
    const button=document.getElementById("togglebtn");
     if(passwordvalue.type==="password")
        {
            passwordvalue.type="text";
            button.textContent="Hide";
        }
     else{
        passwordvalue.type="password";
        button.textContent="Show";
     }   

     
}