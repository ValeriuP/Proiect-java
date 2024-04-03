const form=document.querySelector("#form");
const email=document.getElementById("email");
const password = document.getElementById("password");
const firstName= document.getElementById("first_name");
const lestName= document.getElementById("last_name");
const birthDate=document.getElementById("birth_date")

function validateImputs(){
    const emailVal=email.value;
    const passwordVal=password.value;
    const firstNameVal=firstName.value;
    const lestNameVal=lestName.value;
    const birthDataVal=birthDate.value;

    const storedData=JSON.parse(localStorage.getItem("user_1"));
    let results=true;
    
    if(!storedData.includes(emailVal)){
       setError(email,"email does not exist");
       results= false;
    }
    if(!storedData.includes(passwordVal)){
        setError(password, "password does not exist");
        results=false;
    }
    // if(!storedData.includes(firstNameVal)){
    //   setError(firstName,"first name does not exist");
    //   results=false;
    // }
    // if(!storedData.includes(lestNameVal)){
    //   setError(lestName,"lest name does not exist");
    //   results=false
    // }
    // if(!storedData.includes(birthDataVal)){
    //   setError(birthDate,"birth data does not exist");
    //   results=false
    // }
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