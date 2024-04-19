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
        validateBirthDate()
        setError(birthDate, "birth date is required");
        result=false
    }
    return result
}
function validateBirthDate(input){
    let dob=new Date(input.value);
    let curentDate=new Date();
    let timeDif=curentDate.getTime() -dob.getTime();
    let age=Math.floor(timeDif / (1000 * 3600 * 24 * 365.25));
    return age >=18;
    if (age<18){
        setError(birthDate, "You must be at least 18 year");
        result=false
        console.log(age)
    }
    }
    // verificare varsta    NU FUNCTIONEAZA
    // function validateBirthDate(input){
    //     let birthDate=new Date(input.value);
    //     let today=new Date();
    //     let age=today.getFullYear() - birthDate.getFullYear();
    //     let monthDifference = today.getMonth() - birthDate.getMonth();
      
    //     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    //         age--
    //     }
    //     console.log(age)
    //     if(age<18) {
    //         setError(birthDate, "You must be at least 18 year")
    //         input.style.borderColor = "red"
    //         result=false;
    //     }
    //     else{
    //         setError.textContend ="";
    //     }
    
    // }
    // const enteredValue = new Date('<%=ui_txtDOB.ClientID %>');;
    // const enteredAge = new Date(enteredValue.value);
    // if( enteredAge > 18 ) {
    //     alert("DOB not valid");
    //     enteredValue.focus();
    //     result= false;
    //     console.log(salut)
    // }
    // function validateBirthDate(DOB) {
    //     let today = new Date();
    //     let birthDate = new Date(DOB);
    //     let age = today.getFullYear() - birthDate.getFullYear();
    //     let m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //         age--;
    //     }    
    //     return age;
    // }

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