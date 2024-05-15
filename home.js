const storedData=JSON.parse(localStorage.getItem("userSave"));
let userName=document.getElementById("user_name");

userName.innerText=`Hello,${storedData.firstName } ${storedData.lestName}`;

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
const dataTable=document.getElementById("data_table").getElementsByTagName("tbody")[0];


const email=document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("cpassword");
const firstName=document.getElementById("first_name");
const lestName=document.getElementById("last_name");
const birthDate=document.getElementById("birth_date");


const errorCity=document.querySelector(".error-city");
const errorStreed=document.querySelector(".error-stred");
const errorStreedNr=document.querySelector(".error-streed-nr");
const errorAreaSizi=document.querySelector(".error-area-sizi");
const errorAcYes=document.querySelector(".error-ac");
const errorYearBuilt=document.querySelector(".error-year-built");
const errorRentPrice=document.querySelector(".error-rent-price");
const errorDataAvaible=document.querySelector(".error-data-available");
const viewFlatContainer=document.getElementById("view_flat_container");
const viewFlatBtn=document.getElementById("btn_container_viewFlat");
const addNewBtn=document.getElementById("btn_container");
const profile=document.getElementById("myProfil_container");

// functia butonului logout
function logout(){
    window.location.href="login.html"
}

//  adaugare apartament/casa
 function addNew() {
    
    addnew.style.display="flex";
    viewFlatContainer.style.display="none";
    viewFlatBtn.style.display="none";
    addNewBtn.style.display="flex";
    profile.style.display="none";
    
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
    if(result){
        let newId=Date.now()
    let apartamente=new Apartament(newId,city.value,streedName.value,streedNr.value,areaSizi.value,acYes.value,yearBuilt.value,rentPrice.value,dateAvailabe.value);
        let logedUser=JSON.parse(localStorage.getItem("userSave")) || [];
        let allUser=JSON.parse(localStorage.getItem("users-1")) || [];
        if(logedUser && allUser){
            for (let user of allUser){
                if (user.email===logedUser.email){
               
                    
                    user.apartament.push(apartamente)

                }
            }
            // console.log(allUser)
            localStorage.setItem("users-1",JSON.stringify(allUser));
            
            // sterge valorile scrise in inputuri
            city.value="";
            streedName.value="";
            streedNr.value="";
            areaSizi.value="";
            yearBuilt.value="";
            rentPrice.value="";
            dateAvailabe.value="";
           
            
        }
        // alert("ceva nu e bine")  
    }
    else{
       
       return toastr["error"]("Something is not right !");
    }
   
    
})
// constructor de date
class Apartament{
    constructor(id,city,streedName,streedNr,areaSizi,acYes,yearBuilt,rentPrice,dateAvailabe,favorite=false){
        this.id=id
        this.city=city;
        this.streedName=streedName;
        this.streedNr=streedNr;
        this.areaSizi=areaSizi;
        this.acYes=acYes;
        this.yearBuilt=yearBuilt;
        this.rentPrice=rentPrice;
        this.dateAvailabe=dateAvailabe
        this.favorite=favorite;
    }
    
}
// functia de vizualizat  apartamentele
function viewFlat(){
    viewFlatContainer.style.display="flex";
    addNewBtn.style.display="none";
    viewFlatBtn.style.display=("flex");
    addnew.style.display="none";
    profile.style.display="none";
    const dataTable=document.getElementById("data_table").getElementsByTagName("tbody")[0];  
    let storedData=JSON.parse(localStorage.getItem("users-1")) || [];
    let apartaments=[];
    const user=JSON.parse(localStorage.getItem("userSave")) || [];
    // apartaments=storedData.find(x=>x.email=user.email).apartament;
for (let User of storedData)
    {
        if(User.email===user.email)
            {
                apartaments=User.apartament;
            }
    }

    dataTable.innerHTML="";
    if(dataTable.childElementCount==0){
        apartaments.forEach(rowData=>{
    
    const newRow=dataTable.insertRow();
    const cityCell=newRow.insertCell(0);
    const streedNameCell=newRow.insertCell(1);
    const streedNrCell=newRow.insertCell(2);
    const areaSiziCell=newRow.insertCell(3);
    const acYesCell=newRow.insertCell(4);
    const yearBuiltCell=newRow.insertCell(5);
    const rentPriceCell=newRow.insertCell(6);
    const dateAvailabeCell=newRow.insertCell(7)
    const deleteCell=newRow.insertCell(8);
    const favoritesApart=newRow.insertCell(9)

    cityCell.textContent=rowData.city;
    streedNameCell.textContent=rowData.streedName;
    streedNrCell.textContent=rowData.streedName;
    areaSiziCell.textContent=rowData.areaSizi;
    acYesCell.textContent=rowData.acYes;
    yearBuiltCell.textContent=rowData.yearBuilt;
    rentPriceCell.textContent=rowData.rentPrice;
    dateAvailabeCell.textContent=rowData.dateAvailabe;

    deleteCell.innerHTML=`<button class="delet-btn" _id=${rowData.id} onclick="deleteRow(this)">Delete</button>`;
    favoritesApart.innerHTML=`<button class="favorites-btn" id="favorites_btn" _id=${rowData.id} onclick="favorites(this)">Favorites</button>`
     })}
    }

    //  functia care afiseaza ap. favorite
  function viewFavorites(){
    viewFlatContainer.style.display="flex";
    addNewBtn.style.display="none";
    viewFlatBtn.style.display=("flex");
    addnew.style.display="none";
    profile.style.display="none";
    

    const dataTable=document.getElementById("data_table").getElementsByTagName("tbody")[0];  
    let storedData=JSON.parse(localStorage.getItem("users-1")) || [];
    let apartaments=[];
    const user=JSON.parse(localStorage.getItem("userSave")) || [];
    
for (let User of storedData)
    {
        if(User.email===user.email)
            {
                apartaments=User.apartament.filter(ap=>ap.favorite==true);
            }
    }

    dataTable.innerHTML="";
    if(dataTable.childElementCount==0){
        apartaments.forEach(rowData=>{
    
    const newRow=dataTable.insertRow();
    const cityCell=newRow.insertCell(0);
    const streedNameCell=newRow.insertCell(1);
    const streedNrCell=newRow.insertCell(2);
    const areaSiziCell=newRow.insertCell(3);
    const acYesCell=newRow.insertCell(4);
    const yearBuiltCell=newRow.insertCell(5);
    const rentPriceCell=newRow.insertCell(6);
    const dateAvailabeCell=newRow.insertCell(7)
    const deleteCell=newRow.insertCell(8);
    const favoritesApart=newRow.insertCell(9)

    cityCell.textContent=rowData.city;
    streedNameCell.textContent=rowData.streedName;
    streedNrCell.textContent=rowData.streedName;
    areaSiziCell.textContent=rowData.areaSizi;
    acYesCell.textContent=rowData.acYes;
    yearBuiltCell.textContent=rowData.yearBuilt;
    rentPriceCell.textContent=rowData.rentPrice;
    dateAvailabeCell.textContent=rowData.dateAvailabe;

    deleteCell.innerHTML=`<button class="delet-btn" _id=${rowData.id} onclick="deleteRow(this)">Delete</button>`;
    favoritesApart.innerHTML=`<button class="favorites-btn" _id=${rowData.id} onclick="favorites(this)">Favorites</button>`
     })}

  }

// functia de sters din tabelul cu apartamente

    function deleteRow(row) {
      let _id=row.getAttribute('_id');
        const rowIndex=row.parentNode.parentNode.rowIndex -1;
        dataTable.deleteRow(rowIndex);
        let storedData=JSON.parse(localStorage.getItem("users-1")) || [];
     const user=JSON.parse(localStorage.getItem("userSave")) || [];
        for (let User of storedData)
            {
                if(User.email===user.email)
                    {
                        alert("Do you want to delet?")
                       User.apartament=User.apartament.filter(ap=>ap.id!=_id);
                    }
            }
            localStorage.setItem("users-1",JSON.stringify(storedData));
    }

    function favorites(row){
        let _id=row.getAttribute('_id');
            // O sa coloram cumva butonul ala 
           
            
           
            
            // let favoritesBtn=document.querySelector(".btn_new_yes");
            
            // favoritesBtn.style.backgroundColor="green"
            
            // document.getElementsByClassName("faforites-btn").style.color="green"
            // this.style.backgroundColor ="green"
        let storedData=JSON.parse(localStorage.getItem("users-1")) || [];
        const user=JSON.parse(localStorage.getItem("userSave")) || [];
        for (let User of storedData)
            {
                if(User.email===user.email)
                    {
                        
                       for(let ap of User.apartament)
                        {
                            if(ap.id==_id)
                                {
                                    ap.favorite= !ap.favorite;
                                    if(ap.favorite)
                                        {
                                            row.style.backgroundColor='green';
                                        }
                                        else
                                        {
                                            row.style.backgroundColor='white';
                                        }
                                }
                        }
                    }
            }
            localStorage.setItem("users-1",JSON.stringify(storedData));


    }
    

    
// functia de vizualizare profilul utilizatorului
function myProfil() {
    addnew.style.display="none";
    viewFlatContainer.style.display="none";
    viewFlatBtn.style.display="none";
    addNewBtn.style.display="flex";
    profile.style.display="flex";
   
    let curentUser=JSON.parse(localStorage.getItem("userSave"));
    let showFirstName=document.getElementById("show_name");
    let showLastName=document.getElementById("show_last_name");
    let showemail=document.getElementById("show_email");
    let showBirth=document.getElementById("show_birth");
    let showpassword=document.getElementById("show_password");

     

    showFirstName.innerText=`First Name,${curentUser.firstName}`;
    showLastName.innerText=`Last Name,${curentUser.lestName}`;
    showemail.innerText=`Email,${curentUser.email}`;
    showBirth.innerText=`Birth Date,${curentUser.birthDate}`;
    showpassword.innerText=`Password,${curentUser.password}`;

    
  
}
// functia de memorare date noi ale utilizatorului

function saveNew(){
    
    let newName=document.getElementById("new_name").value;
    let newLastName=document.getElementById("new_last_name").value;
    let newBirth=document.getElementById("new_birth").value;
    let newPassword=document.getElementById("new_password").value;
    let newConfirmPassword=document.getElementById("new_confirm_password").value;
    
    let users = JSON.parse(localStorage.getItem('users-1')) || [];
    let loggedUser = JSON.parse(localStorage.getItem('userSave')) || [];
    if(users)
        {
            for(let user of users)
                {
                    if(user.email== loggedUser.email)
                        {
                            user.firstName=newName;
                            user.lestName=newLastName;
                            user.birthDate=newBirth;
                            user.password=newPassword;
                            user.cpassword=newConfirmPassword;
                        }
                }
                localStorage.setItem('users-1',JSON.stringify(users));
                location.href='login.html';
        }

 
     
  

}
function noSave(){
    window.location.href="home.html"
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