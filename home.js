const storedData=JSON.parse(localStorage.getItem("user-1"));
const userName=document.getElementById("user_name");
userName.innerText=`Hello,${storedData[firstName]}`;
console.log(storedData);
