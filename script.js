
const submitBtn= document.querySelector('#submit');
const form=document.querySelector('#form1');
//var displayButton = document.getElementById("name") 

submitBtn.addEventListener('click',(e)=>{
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
   
 document.getElementById("btnn").addEventListener("click",function(){
  //  console.log('data')
    let data = localStorage.getItem("userdata");
    data = JSON.parse(data)
    console.log(data);
    result.innerHTML = '<h3 class="user-detail">User Details</h3>'
    data.map((item, idx) => {
       result.innerHTML += `<p class="user-title">User ${idx+1}</p>`;
       for (const key in item) {
          result.innerHTML += `<p>${key} : ${item[key]}</p>`;
       }
    })
})
