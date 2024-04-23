const storedData=JSON.parse(localStorage.getItem("userSave"));
const userName=document.getElementById("user_name");

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
    let apartament=new Apartament(city.value,streedName.value,streedNr.value,areaSizi.value,acYes.value,yearBuilt.value,rentPrice.value,dateAvailabe.value);
        
        let logedUser=JSON.parse(localStorage.getItem("userSave")) || [];
        let allUser=JSON.parse(localStorage.getItem("users-1")) || [];
        if(logedUser && allUser){
            for (let user of allUser){
                if (user.email===logedUser.email){
                    user.apartament.push(apartament)
                }
            }
            localStorage.setItem("users-1",JSON.stringify(allUser));
            city.value="";
            streedName.value="";
            streedNr.value="";
            areaSizi.value="";
            yearBuilt.value="";
            rentPrice.value="";
            dateAvailabe.value="";
           return true
        }

        alert("ceva nu e bine")
        toastr["error"]("Something is not right !");
       
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
// functia de vizualizat  apartamentele
function viewFlat(){
    viewFlatContainer.style.display="flex";
    addNewBtn.style.display="none";
    viewFlatBtn.style.display=("flex");
    addnew.style.display="none";
    profile.style.display="none";
    const dataTable=document.getElementById("data_table").getElementsByTagName("tbody")[0];  
    let storedData=JSON.parse(localStorage.getItem("users-1")) || [];
    let apartaments;
    const user=JSON.parse(localStorage.getItem("userSave")) || [];
    apartaments=storedData.find(x=>x.email=user.email).apartament;
    // console.log(apartaments)
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

    deleteCell.innerHTML=`<button class="delet-btn" onclick="deleteRow(this)">Delete</button>`;
    favoritesApart.innerHTML=`<button class="favorites-btn" onclick="favorites(this)">Favorites</button>`
     })}
    }
// functia de sters din tabelul cu apartamente
function deleteRow(row){
    const rowIndex=row.parentNode.parentNode.rowIndex -1;
    dataTable.deleteRow(rowIndex);
    saveData()
    
    // functia de salvare apartamente
}
function saveData(){
    const dataValue=[];
    for(i=0;i<dataTable.rows.length;i++){
        const row=dataTable.rows[i];
        const rowData={
            hours:row.cells[0].textContent,
            location:row.cells[1].textContent

        }
        dataValue.push(rowData);

    }
    localStorage.setItem("dataTableValue",JSON.stringify(dataValue));

}
// functia de vizualizare profilul utilizatorului
function myProfil() {
    addnew.style.display="none";
    viewFlatContainer.style.display="none";
    viewFlatBtn.style.display="none";
    addNewBtn.style.display="flex";
    profile.style.display="flex";
    const dataTableProfil=document.getElementById("data_table_profil").getElementsByTagName("tbody")[0];
    let dataProfil=JSON.parse(localStorage.getItem("userSave"));

    let profil;
    profil=dataProfil
    if(dataTableProfil.childElementCount==0){
        profil.forEach(rowData=>{
            const newRow=dataTableProfil.insertRow();
            const firstNameCell=newRow.insertCell(0);
            const lastNameCell=newRow.insertCell(1);
            const emailCell=newRow.insertCell(2);
            const birthDateCell=newRow.insertCell(3);
            const changepasswordCell=newRow.insertCell(4);
             
            firstNameCell.textContent=rowData.firstName;
            lastNameCell.textContent=newRow.lastName;
            emailCell.textContent=newRow.email;
            birthDateCell.textContent=newRow.birthDate;

            changepasswordCell.innerHTML=`input class="changepassword-imp" onclik="changepassword(this)">Change Password,/input>`;

        })
    }
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