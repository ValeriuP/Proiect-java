// preluare div / inputuri din html
// declaration of constants
const form=document.getElementById("form");
const email=document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("cpassword");
const firstName=document.getElementById("first_name");
const lestName=document.getElementById("last_name");
const birthDate=document.getElementById("birth_date");

// denumirea salvari in local store
// array declaration to save to local storage
let users_1=[];

// functia de stocare date utilizator
// user data storage function
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    
    // verificare local storage pentru memeorare date user si validare input
    // input validation function
    if(validImputs()){
        // preluare date din local storage
        // declaration of constancy local storage
        let stocare=localStorage.getItem("users-1");
        // arata datele "stocare"
        console.log(stocare);
        if (stocare){
            // adauga date din stocare in users_1
            users_1=JSON.parse(stocare);
            console.log(users_1)
        }
        let newUser=new User(email.value,password.value,cpassword.value,
            firstName.value,lestName.value,birthDate.value )
            // impinge /adauga datele din newUser in user_1
        users_1.push(newUser);
            localStorage.setItem("users-1",JSON.stringify(users_1));
            console.log(email.value);
            // te trimite pe pagina login
            window.location.href="login.html"
    }


})

// obiectul creat pentru local storage si pentru altele
// object creation
class User {
    constructor(email,password,cpassword,firstName,lestName,birthDate,){
        this.email=email;
        this.password=password;
        this.cpassword=cpassword;
        this.firstName=firstName;
        this.lestName=lestName;
        this.birthDate=birthDate;
        this.apartament=[];
    }
}



// functia de validare date utilizator
// user data validation function
function validImputs(){
    let result=true;
    const emailVal=email.value;
    if(emailVal==""){
        setError(email,"email is required",);
        result=false;
        
    }
    else if(!isValidEmail(emailVal)){
        setError(email,"please enter valid email");
        result=false;
    }
     // toaster mesaje de eroare
    toastr["error"]("Something is not right !");
    const passwordVal=password.value;
    if(passwordVal==""){
        setError(password, "password is required");
        result=false
    }
    else if (passwordVal.length<8){
        result=false;
        setError(password,"password must be atleas 8 characters"); 
    }
    const cpasswordVal=cpassword.value;
    if(cpasswordVal==""){
        setError(cpassword, "password is required");
        result=false;
    }
    if (cpasswordVal!=passwordVal){
        setError(password,"password is required")
        result=false;
    }
    const firstNameVal=firstName.value;
    if(firstNameVal==""){
        setError(firstName,"first name is required");
        result=false;
    }
    const lestNameVal=lestName.value;
    if(lestNameVal==""){
        setError(lestName, "lest name is required");
        result=false;
    }
    const birthDateVal=birthDate.value;
    if(birthDateVal==""){
        
        
        setError(birthDate, "birth date is required");
        result=false
    }
    if(validateBirthDate(birthDateVal)){
        result=false
    }
    return result
}
// date of birth validation function
function validateBirthDate(input){
    let dob=new Date(input);
    let curentDate=new Date();
    let timeDif=curentDate.getTime() -dob.getTime();
    let age=Math.floor(timeDif / (1000 * 3600 * 24 * 365.25));
    
    if (age<18){
        setError(birthDate, "You must be at least 18 year");
       return true
        console.log(age)
    }
    return false
    }
    

// functia care trimite eroarea
// the error function
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement= inputGroup.querySelector('.error');
    
    errorElement.innerText=message;
    inputGroup.classList.add('error');
}

// functia validare email
// email validation function
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