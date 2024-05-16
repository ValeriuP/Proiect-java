// preluare date din local storage user logat
const storedData=JSON.parse(localStorage.getItem("userSave"));
// preluare date user pentru mesaj de intampinare
let userName=document.getElementById("user_name");
// adaugare mesaj de intampinare user logat
userName.innerText=`Hello,${storedData.firstName } ${storedData.lestName}`;
// preluare date apartamente din html 
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

// preluarea date utilizator din html inputuri
const email=document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("cpassword");
const firstName=document.getElementById("first_name");
const lestName=document.getElementById("last_name");
const birthDate=document.getElementById("birth_date");

// preluare div pentru paragraf erori
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
    
    // schimba display
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
        // verifica inputu sa nu fie gol
        errorCity.innerText="Please enter a city name";
        result=false
    }
    else{
        errorCity.innerText=="";
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
        // generare de id dupa data
        let newId=Date.now()
         const hazAc=acYes.checked?"yes":"not"
    let apartamente=new Apartament(newId,city.value,streedName.value,streedNr.value,areaSizi.value,hazAc,yearBuilt.value,rentPrice.value,dateAvailabe.value);
    //    preluam datele din local storage
    let logedUser=JSON.parse(localStorage.getItem("userSave")) || [];
        let allUser=JSON.parse(localStorage.getItem("users-1")) || [];
        if(logedUser && allUser){
            for (let user of allUser){
                // verificam userul existent cu userul conectat
                if (user.email===logedUser.email){
                    
                    console.log(acYes)
                    // adaugam apartamente noi
                    user.apartament.push(apartamente)

                }
            }
            // console.log(acYes.checked)
            
            // rescriem in local storage datele noi user si apartamente
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
         
    }
    else{
    // alert("ceva nu e bine") 
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
    // schimbam display
    viewFlatContainer.style.display="flex";
    addNewBtn.style.display="none";
    viewFlatBtn.style.display=("flex");
    addnew.style.display="none";
    profile.style.display="none";
    // preluam div din html
    const dataTable=document.getElementById("data_table").getElementsByTagName("tbody")[0];  
    //    preluam datele din local storage useri existenti
    let storedData=JSON.parse(localStorage.getItem("users-1")) || [];
    let apartaments=[];
    //    preluam datele userului logat
    const user=JSON.parse(localStorage.getItem("userSave")) || [];
    // apartaments=storedData.find(x=>x.email=user.email).apartament;
for (let User of storedData)
    {   
        // am gasit userul logat 
        if(User.email===user.email)
            {
                apartaments=User.apartament;
            }
    }
    

    //  refres la tabel "golire"   
    dataTable.innerHTML="";
    if(dataTable.childElementCount==0){
        apartaments.forEach(rowData=>{
    // construire tabel
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
    // adaugare date in tabel
    cityCell.textContent=rowData.city;
    streedNameCell.textContent=rowData.streedName;
    streedNrCell.textContent=rowData.streedName;
    areaSiziCell.textContent=rowData.areaSizi;
    acYesCell.textContent=rowData.acYes;
    yearBuiltCell.textContent=rowData.yearBuilt;
    rentPriceCell.textContent=rowData.rentPrice;
    dateAvailabeCell.textContent=rowData.dateAvailabe;
    // butoane  de stergere si de favorite pe randuri
    deleteCell.innerHTML=`<button class="delet-btn" _id=${rowData.id} onclick="deleteRow(this)">Delete</button>`;
    favoritesApart.innerHTML=`<button class="favorites-btn" id="favorites_btn" _id=${rowData.id} onclick="favorites(this)">Favorites</button>`
    
    let row=document.getElementById("favorites_btn")
    if (apartaments.favorite==true){
       row.style.backgroundColor='green'
    }
    else{
        row.style.backgroundColor='white'
    }
    })}
    }

    //  functia care afiseaza ap. favorite
  function viewFavorites(){
    // schimbare display
    viewFlatContainer.style.display="flex";
    addNewBtn.style.display="none";
    viewFlatBtn.style.display=("flex");
    addnew.style.display="none";
    profile.style.display="none";
    // legatura cu tabelul di html
    const dataTable=document.getElementById("data_table").getElementsByTagName("tbody")[0];  
    // preluare date din local storage useri
    let storedData=JSON.parse(localStorage.getItem("users-1")) || [];
    let apartaments=[];
    // preluare user logat
    const user=JSON.parse(localStorage.getItem("userSave")) || [];
    
for (let User of storedData)
    {
        if(User.email===user.email)
            // am gasit userul logat
            {
                // filtrare pentru a gasi apartament favorit
                apartaments=User.apartament.filter(ap=>ap.favorite==true);
            }
    }
    // refres tabel
    dataTable.innerHTML="";
    if(dataTable.childElementCount==0){
        apartaments.forEach(rowData=>{
    // construirea de tabel in html
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
    // adaugarea de date in tabel
    cityCell.textContent=rowData.city;
    streedNameCell.textContent=rowData.streedName;
    streedNrCell.textContent=rowData.streedName;
    areaSiziCell.textContent=rowData.areaSizi;
    acYesCell.textContent=rowData.acYes;
    yearBuiltCell.textContent=rowData.yearBuilt;
    rentPriceCell.textContent=rowData.rentPrice;
    dateAvailabeCell.textContent=rowData.dateAvailabe;
    // butonanele de stergere si adaugare la favorit
    deleteCell.innerHTML=`<button class="delet-btn" _id=${rowData.id} onclick="deleteRow(this)">Delete</button>`;
    favoritesApart.innerHTML=`<button class="favorites-btn" _id=${rowData.id} onclick="favorites(this)">Favorites</button>`
     })}

  }

// functia de sters din tabelul cu apartamente

    function deleteRow(row) {
        // identificare dupa id
      let _id=row.getAttribute('_id');
    //   identificare rand
        const rowIndex=row.parentNode.parentNode.rowIndex -1;
        // sterge randul
        dataTable.deleteRow(rowIndex);
        // preluare date user din local storage 
        let storedData=JSON.parse(localStorage.getItem("users-1")) || [];
     const user=JSON.parse(localStorage.getItem("userSave")) || [];
        for (let User of storedData)
            {
                // am gasit userul logat 
                if(User.email===user.email)
                    {
                        alert("Do you want to delet?")
                        // identificare prin filtrare dupa id
                       User.apartament=User.apartament.filter(ap=>ap.id!=_id);
                    }
            }
            // rescriere date in local storage
            localStorage.setItem("users-1",JSON.stringify(storedData));
    }

    function favorites(row){
        // atribuire id
        let _id=row.getAttribute('_id');
        //   preluare date useri din local storage 
        let storedData=JSON.parse(localStorage.getItem("users-1")) || [];
        // preluare date user logat
        const user=JSON.parse(localStorage.getItem("userSave")) || [];
        for (let User of storedData)
            {
                // am identificat userul logat
                if(User.email===user.email)
                    {
                        // parcurgere constructorului pentru identificare dupa id
                       for(let ap of User.apartament)
                        {
                            if(ap.id==_id)
                                {
                                    ap.favorite= !ap.favorite;
                                    if(ap.favorite)
                                        {
                                            // marcare prin schimbare culoare 
                                            row.style.backgroundColor='green';
                                        }
                                        else
                                        {
                                            // revenire la culoarea initial
                                            row.style.backgroundColor='white';
                                        }
                                }
                        }
                    }
            }
            // rescrierea datelor "memorare" datelor in local storage
            localStorage.setItem("users-1",JSON.stringify(storedData));


    }
    

    
    // functia de vizualizare profilul utilizatorului
function myProfil() {
    // schimbarea display
    addnew.style.display="none";
    viewFlatContainer.style.display="none";
    viewFlatBtn.style.display="none";
    addNewBtn.style.display="flex";
    profile.style.display="flex";
    //preluare date din local storage    
    let curentUser=JSON.parse(localStorage.getItem("userSave"));
    // se face legatura cu div in html
    let showFirstName=document.getElementById("show_name");
    let showLastName=document.getElementById("show_last_name");
    let showemail=document.getElementById("show_email");
    let showBirth=document.getElementById("show_birth");
    let showpassword=document.getElementById("show_password");
    // afisarea datele user logat in html
    showFirstName.innerText=`First Name,${curentUser.firstName}`;
    showLastName.innerText=`Last Name,${curentUser.lestName}`;
    showemail.innerText=`Email,${curentUser.email}`;
    showBirth.innerText=`Birth Date,${curentUser.birthDate}`;
    showpassword.innerText=`Password,${curentUser.password}`;
}
// functia de memorare date noi ale utilizatorului
function saveNew(){
    // preluare date din intut html
    let newName=document.getElementById("new_name").value;
    let newLastName=document.getElementById("new_last_name").value;
    let newBirth=document.getElementById("new_birth").value;
    let newPassword=document.getElementById("new_password").value;
    let newConfirmPassword=document.getElementById("new_confirm_password").value;
    // preluare date user din local storage 
    let users = JSON.parse(localStorage.getItem('users-1')) || [];
    // preluare date user logat din local storage
    let loggedUser = JSON.parse(localStorage.getItem('userSave')) || [];
    if(users)
        {
            for(let user of users)
                {
                    // am identificat userul logat
                    if(user.email== loggedUser.email)
                        {
                            // preluare date noi din input 
                            user.firstName=newName;
                            user.lestName=newLastName;
                            user.birthDate=newBirth;
                            user.password=newPassword;
                            user.cpassword=newConfirmPassword;
                        }
                }
          if(newPassword.length<8){
            result=false;
            return toastr["error"]("password must be atleas 8 characters!");
          } 
          let birthDateVal=newBirth.value;
          if(validateBirthDate(birthDateVal)){
            result=false
        }
        
        //  toastr["error"]("You must be at least 18 year!");
          
                // rescrierea datelor noi in local storage
                localStorage.setItem('users-1',JSON.stringify(users));
                // trimite la pagina de logare
                location.href='login.html';
        }
}
function validateBirthDate(input){
    let dob=new Date(input);
    let curentDate=new Date();
    let timeDif=curentDate.getTime() -dob.getTime();
    let age=Math.floor(timeDif / (1000 * 3600 * 24 * 365.25));
    
    if (age<18){
        toastr["error"]("You must be at least 18 year")
       return true
        console.log(age)
    }
    return false
    }

//    functia de refuzare schimbare date
function noSave(){
    window.location.href="home.html"
}
function clima(){
let _id=row.getAttribute('_id');
let storedData=JSON.parse(localStorage.getItem("users-1")) || [];
const user=JSON.parse(localStorage.getItem("userSave"));
for (let User of storedData){
          if(User.email===user.email){
               for (let ac of User.acYes){
                       if(ac.id==_id){
                        ac.acYes=!ac.acYes;
                        if(ac.acYes){
                            result= false
                            
                        }
                        else{
                           result= true
                        }
                       }
                    }
          }
}
 localStorage.setItem("users-1",JSON.stringify(storedData))
}
//   functie de sortare
function sort(){
   


    
//     let users = JSON.parse(localStorage.getItem('users-1')) || [];
//     let loggedUser = JSON.parse(localStorage.getItem('userSave')) || [];
//     if(users)
//         {
//             for(let user of users)
//                 {
//     if(user.email== loggedUser.email){
//         console.log(users.apartament)
//     }
// }}
//     const dataTable=document.getElementById("data_table").getElementsByTagName("tbody")[0];  
//     // const rows=Array.from(dataTable.row)
//     let apart=JSON.parse(localStorage.getItem("users-1"));
    
//     rows.sort((a,b)=>{
//         const numberA=parseInt(a.cells[0].textContent);
//         const numberB=parseInt(b.cells[0].textContent);
//         return numberA-numberB;
//     })
//     console.log(dataTable)
//         rows.forEach((row)=>{
//             dataTable.appendChild(row);

       
        
//     })
}

// toster   alerte eroare
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