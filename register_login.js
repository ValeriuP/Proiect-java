const form=document.getElementById("form");
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

    
    // verificare localstorigi pentru memeorare date user
    if(validImputs()){
        let stocare=localStorage.getItem("users-1");
        console.log(stocare);
        if (stocare){
            users_1=JSON.parse(stocare);
            console.log(users_1)
        }
        let newUser=new User(email.value,password.value,cpassword.value,
            firstName.value,lestName.value,birthDate.value )
        users_1.push(newUser);
            localStorage.setItem("users-1",JSON.stringify(users_1));
            console.log(email.value);
            
            window.location.href="login.html"
    }


})

// obiectul creat pentru localstorigi si pentru altele
class User {
    constructor(email,password,cpassword,firstName,lestName,birthDate){
        this.email=email;
        this.password=password;
        this.cpassword=cpassword;
        this.firstName=firstName;
        this.lestName=lestName;
        this.birthDate=birthDate;
    }
}
// functia de validare date utilizator
function validImputs(){
    let result=true;
    const emailVal=email.value;
    if(emailVal==""){
        setError(email,"email is required",);
         // toaster mesaje de eroare
        // toastr["error"]("email is required","Email");
        result=false;
        
    }
    else if(!isValidEmail(emailVal)){
        setError(email,"please enter valid email");
         // toaster mesaje de eroare
        // toastr["error"]("please enter valid email","Email");
        result=false;
    }
     // toaster mesaje de eroare
    toastr["error"]("Something is not right !");
    const passwordVal=password.value;
    if(passwordVal==""){
        setError(password, "password is required");
         // toaster mesaje de eroare
        // toastr["error"]("password is required","Password");
        result=false
    }
    else if (passwordVal.length<8){
        result=false;
        setError(password,"password must be atleas 8 characters"); 
         // toaster mesaje de eroare 
        // toastr["error"]("password must be atleas 8 characters","Password");
    }
    const cpasswordVal=cpassword.value;
    if(cpasswordVal==""){
        setError(cpassword, "password is required");
        // toastr["error"]("password is required","Password");
        result=false;
    }
    if (cpasswordVal!=passwordVal){
        setError(password,"password is required")
        // toastr["error"]("password is required","Password");
        result=false;
    }
    const firstNameVal=firstName.value;
    if(firstNameVal==""){
        setError(firstName,"first name is required");
        // toastr["error"]("first name is required","First Name");
        result=false;
    }
    const lestNameVal=lestName.value;
    if(lestNameVal==""){
        setError(lestName, "lest name is required");
        // toastr["error"]("lest name is required","Last Name");
        result=false;
    }
    const birthDateVal=birthDate.value;
    if(birthDateVal==""){
        // validateBirthDate()
        setError(birthDate, "birth date is required");
        // toastr["error"]("birth date is required","Birth Date");
        result=false
    }
    return result
}
// verificare varsta    NU FUNCTIONEAZA
function validateBirthDate(input){
    let birthDate=new Date(input.value);
    let today=new Date();
    let age=today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
  console.log(birthDate)
    if (monthDifference < 0 || (monthDifference === 0 && today.getMonth())) {
        age--
    }
    if(age<18) {
        setError(birthDate, "You must be at least 18 year")
        input.style.borderColor = "red"
    }
    else{
        setError.textContend ="";
    }

}
// functia care trimite eroarea
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement= inputGroup.querySelector('.error');
    
    errorElement.innerText=message;
    inputGroup.classList.add('error');
}

// functia validare email
function isValidEmail(email){
     // Split the email address into local part and domain part
    const parts=email.split('@');
// verifica daca sunt caractere in ambele parti fata de @
    if (parts.length !==2){
        return false;
    }
     // Check if the local part and domain part are not empty
     const localPart = parts[0];
     const domainPart = parts[1];
   
     if (localPart.length === 0 || domainPart.length === 0) {
       return false;
     }
   
     // Check if there is at least one dot in the domain part
     if (!domainPart.includes('.')) {
       return false;
     }
   
     // If all conditions pass, the email is considered valid
     return true;


}



// toster  este pentru alerte eroare
toastr.options = {
    "closeButton": false,
    "debug": true,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }