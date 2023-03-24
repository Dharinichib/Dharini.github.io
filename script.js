
const submitBtn= document.querySelector('#submit');
const form=document.querySelector('#form1');
const email = document.getElementById("mail");
//var displayButton = document.getElementById("name") 

submitBtn.addEventListener('click',(e)=>{
    alert("SUBMITTED...")
    e.preventDefault();
    const formData=new FormData(form);
    const values=[...formData.entries()];
   
    var obj=Object.fromEntries(values);
    //console.log(obj);
    let user1 = getData() ?? [];
    const array = [...user1];
    array.push(obj);
    console.log(array)
    localStorage.setItem('userdata',JSON.stringify(array));
    
});
function getData(){
    let user = JSON.parse(localStorage.getItem('userdata'));
    return user;
   // console.log(user);
   }
   
 document.getElementById("btnn").addEventListener("click", function(){
   displaydata();
   let result = document.getElementById("result");
   // localStorage.clear();
   if(result.style.display === "block"){
      result.style.display = "none";
     document.getElementById("btnn").textContent = "Display";
   }
   else {
      result.style.display = "block";
     document.getElementById("btnn").textContent = "Hide";
   }
  //  console.log('data')
   })


  
 document.getElementById("clear").addEventListener("click", function(){
   localStorage.clear();
  
});

 function displaydata(){
   let data = localStorage.getItem("userdata");
   data = JSON.parse(data)
   console.log(data)
   if(data === null){
     alert("Please enter data");
   }
   else{
   console.log(data);
   result.innerHTML = '<class="user-detail"><h2>User Details</h2><br>'
   data.map((item, idx) => {
      result.innerHTML += `<br><p class="user-title"><hr color = black height = 1><h3><br><u>User ${idx+1}</u></h3><br></p>`;
      for (const key in item) {
         result.innerHTML += `<p><b>${key} </b>: ${item[key]}</p>`;
      }
   })}
 }