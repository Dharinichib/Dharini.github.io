const btn = document.querySelector('#submit');
const form = document.querySelector('#form1');


btn.addEventListener('click', (e) => {
    // prevent the form from submitting
    e.preventDefault();

    // show the form values
    const formData = new FormData(form);
    const values = [...formData.entries()];
    console.log(values);
    localStorage.setItem("users",JSON.stringify(values));
});
  
  
