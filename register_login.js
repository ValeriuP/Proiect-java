const form=document.getElementById("#form");
const email=document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("cpassword");
const firstName=document.getElementById("first_name");
const lestName=document.getElementById("last_name");
const birthDate=document.getElementById("birth_date");

// denumirea salvari in local store
let users_1=[];

// functia de stocare date utilizator
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(validImputs()){
        users_1.push(email.value,password.value,cpassword.value,
            firstName.value,lestName.value,birthDate.value );
            localStorage.setItem("users-1",JSON.stringify(users_1));
            window.location.href="login.html"
    }
})
// functia de validare date utilizator
function validImputs(){
    let result=true;
    const emailVal=email.value;
    if(emailVal==""){
        setError(email,"email is required");
        result=false;
    }
    else if(!isValidEmail(emailVal)){
        setError(email,"please enter valid email");
        result=false;
    }
    const passwordVal=password.value;
    if(passwordVal==""){
        setError(password, "password is required");
        result=false
    }
    else if (passwordVal.length<8){
        result=false;
        setError

        
    }
}
