const form=document.querySelector("form")
const email=document.getElementById("email");
const password = document.getElementById("password");

function validateImputs(){
    const emailVal=email.value;
    const passwordVal=password.value;
    const storedData=JSON.parse(localStorage.getItem("users-1"));
    let results=true;
    for (let element of storedData){
      if (element.email==emailVal && element.password==passwordVal){
        // am gasit userul care vrea sa se logeze 
        return element
      }
    }
    setError(password,"password or email is incorrect");
     // toaster mesaje de eroare
    toastr["error"]("password or email is incorrect","Alert");
    return false;
    

}

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  let user=validateImputs()
  if(user){
    let stocareUser=localStorage.setItem("userSave",JSON.stringify(user));
    // console.log(stocareUser);
  
  window.location.href="home.html"
  }
  //   window.location.href="home.html"
  // }
  // else {
  //   // mesaj eroare si stergem textul din campul din input
    

  
})
 function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
  
    errorElement.innerText = message;
    inputGroup.classList.add('error');
  }