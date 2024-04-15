const storedData=JSON.parse(localStorage.getItem("userSave"));
const userName=document.getElementById("user_name");

userName.innerText=`Hello,${storedData[4]}`;
console.log(storedData);
const form=document.getElementById("form")
const containerAdd=document.getElementById("btn_container");
const addnew=document.getElementById("add_new_container")
// functia butonului logout
function logout(){
    window.location.href="login.html"
}

//  adaugare apartament/casa
 function addNew() {
    
    console.log(storedData)
    addnew.style.display="flex";
   const main=document.querySelector(".main");
    main.classList.add("blur-main")
    
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const city=document.getElementById("city");
    const streedName=document.getElementById("stred_name");
    const streedNr=document.getElementById("streed_nr");
    const areaSizi=document.getElementById("area_sizi");
    const acYes=document.getElementById("yes");
    const acNo=document.getElementById("no");
    const yearBuilt=document.getElementById("year_built");
    const rentPrice=document.getElementById("rent_price");
    const dateAvailabe=document.getElementById("date_availabe");

    const errorCity=document.querySelector(".error-city");
    const errorStreed=document.querySelector(".error-stred");
    const errorStreedNr=document.querySelector(".error-streed_nr");
    const errorAreaSizi=document.querySelector(".error-area_sizi");
    const errorAcYes=document.querySelector(".Ac_yes");
    const errorAcNo=document.querySelector(".Ac_no");
    const errorYearBuilt=document.querySelector(".year_built");
    const errorRentPrice=document.querySelector(".rent_price");
    const errorDataAvaible=document.querySelector(".date_availabe");
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
        errorStreedNr.innerText==""
    }
    if(areaSizi.value==""){
        errorAreaSizi.innerText="Please enter a area sizi";
        result=false
    }
    else{
        errorAreaSizi.innerText==""
    }
    if(acYes.value==""){
        errorAcYes.innerText="Please enter AC";
        result=false
    }
    else{
        errorAcYes.innerText=""
    }
    if(acNo.value==""){
        errorAcNo.innerText="Please enter AC";
        result=false
    }
    else{
        errorAcNo.innerText=""
    }
    if(yearBuilt.value==""){
        errorYearBuilt.innerText="Please enter a year built";
        result=false
    }
    else{
        errorYearBuilt.innerText=""
    }
    if(rentPrice.value==""){
        errorRentPrice.innerText="Please enter a rent Price";
        result=false
    }
    else{
        errorRentPrice.innerText=""
    }
    if(dateAvailabe.value==""){
        errorDataAvaible.innerText="Please enter a data availabe";
        result=false
    }
    else{
        errorDataAvaible.innerText=""
    }
    if(result){
        const cityValue=document.getElementById("city_value");
        cityValue=city.value;
        cityValue.innerText=city.value;
    }
})