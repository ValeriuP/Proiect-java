const storedData=JSON.parse(localStorage.getItem("userSave"));
const userName=document.getElementById("user_name");

userName.innerText=`Hello,${storedData.firstName } ${storedData.lestName}`;
// console.log(storedData);
const form=document.getElementById("form")
const containerAdd=document.getElementById("btn_container");
const addnew=document.getElementById("add_new_container")
const city=document.getElementById("city");
const streedName=document.getElementById("stred_name");
const streedNr=document.getElementById("streed_nr");
const areaSizi=document.getElementById("area_sizi");
const acYes=document.getElementById("ac_value");
const yearBuilt=document.getElementById("year_built");
const rentPrice=document.getElementById("rent_price");
const dateAvailabe=document.getElementById("date_availabe");

const errorCity=document.querySelector(".error-city");
const errorStreed=document.querySelector(".error-stred");
const errorStreedNr=document.querySelector(".error-streed-nr");
const errorAreaSizi=document.querySelector(".error-area-sizi");
const errorAcYes=document.querySelector(".error-ac");
const errorYearBuilt=document.querySelector(".error-year-built");
const errorRentPrice=document.querySelector(".error-rent-price");
const errorDataAvaible=document.querySelector(".error-data-available");
// functia butonului logout
function logout(){
    window.location.href="login.html"
}

//  adaugare apartament/casa
 function addNew() {
    
    // console.log(storedData)
    addnew.style.display="flex";
   const main=document.querySelector(".main");
    main.classList.add("blur-main")
    
}
// functia de verificare inputuri si erori input
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let result=true
    if (city.value==""){
        errorCity.innerText="Please enter a city name";
        result=false
    }
    else{
        errorCity.innerText="";
    }
    if(streedName.value==""){
        errorStreed.innerText="Please enter a streed name";
        result=false
    }
    else{
        errorStreed.innerText=="";
    }
    if (streedNr.value==""){
        errorStreedNr.innerText="Please enter a streed namber";
        result=false
    }
    else{
        errorStreedNr.innerText=="";
    }
    if(areaSizi.value==""){
        errorAreaSizi.innerText="Please enter a area sizi";
        result=false
    }
    else{
        errorAreaSizi.innerText=="";
    }
    
    if(yearBuilt.value==""){
        errorYearBuilt.innerText="Please enter a year built";
        result=false
    }
    else{
        errorYearBuilt.innerText="";
    }
    if(rentPrice.value==""){
        errorRentPrice.innerText="Please enter a rent Price";
        result=false
    }
    else{
        errorRentPrice.innerText="";
    }
    if(dateAvailabe.value==""){
        errorDataAvaible.innerText="Please enter a data availabe";
        result=false
    }
    else{
        errorDataAvaible.innerText="";
    }
    toastr["error"]("Something is not right !");
    if(result){
        // let cityValue=document.getElementById("city");
        // cityValue=city.value;
        // cityValue.innerText=city.value;
       let apart=[];
        let apartament=new Apartament(city.value,streedName.value,streedNr.value,areaSizi.value,acYes.value,yearBuilt.value,rentPrice.value,dateAvailabe.value);
       apart.push(apartament)
    
        localStorage.apartament=JSON.stringify(apartament);
        // localStorage.setItem("users-1",JSON.stringify(apartament));
        


        
        // apartament=[];
        
        // apartament.push(apartamentSave)
       
        
        saveApartament()
    }

})
// constructor de date
class Apartament{
    constructor(city,streedName,streedNr,areaSizi,acYes,yearBuilt,rentPrice,dateAvailabe){
        this.city=city;
        this.streedName=streedName;
        this.streedNr=streedNr;
        this.areaSizi=areaSizi;
        this.acYes=acYes;
        this.yearBuilt=yearBuilt;
        this.rentPrice=rentPrice;
        this.dateAvailabe=dateAvailabe
    }
}
function getLoggedInUser(){
return localStorage.getItem("apartament")
}

function saveApartament(apartamentData){
    let curentUser=getLoggedInUser();
    if(!curentUser){
        toastr["error"]("No user is currently logged in !","Alert");
        return
        // console.log("salut")
    }
   let apartmentDetali=localStorage.getItem("user-1");
    localStorage.setItem("apartament:$(curentUser)",JSON.stringify(apartamentData));
}
// function getApartamentData(){
//     let curentUser= getLoggedInUser();
//     if(!curentUser){
//         toastr["error"]("No user is currently logged in !","Alert");
//         return
//     }
//     let apartamentData=localStorage.getItem("apartament:$(curentUser)");
//     return apartamentData ? JSON.parse(apartamentData):[];
// }