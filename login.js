const form=document.querySelector("#form");
const email=document.getElementById("email");
const password = document.getElementById("password");
const f

function validateImputs(){
    const emailVal=email.value;
    const passwordVal=password.value;
    const storedData=JSON.parse(localStorage.getItem("user"));
    let results=true;
    
    if(!storedData.includes(emailVal)){
       setError(email,"email does not exist");
       results= false;
    }
    if(!storedData.includes(passwordVal)){
        setError(password, "password does not exist");
        results=false;
    }
    return results;

}

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  if(validateImputs()){
    window.location.href="home.html"
  }
})
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
  
    errorElement.innerText = message;
    inputGroup.classList.add('error');
  }