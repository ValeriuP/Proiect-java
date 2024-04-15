// const storedData=JSON.parse(localStorage.getItem("userSave"));
// const userName=document.getElementById("user_name");
// // firstName=firstName.value;
// // userName.innerText=`Hello,${storedData[firstName]}`;
// // console.log(storedData);


// functia butonului login
function logout(){
    window.location.href="login.html"
}
// let addNewFlat=document.getElementById("container");

function addNewFlat(){
    const form=document.getElementById("form");
    form.style.display="flex";
    const container=document.getElementById(".container");
    container.classList.add("blur-container")
}