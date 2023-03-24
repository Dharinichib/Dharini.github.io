let err = document.getElementById("error");
let input = document.getElementById("FirstName");

input.onblur = function(){
	if(input.value==""){
		input.classList.add('invalid');
		err.innerHTML= "Please enter correct Firstname."
          
	}
}
input.onfocus = function(){
	input.classList.remove('invalid');
	err.innerHTML = "";
}

LastName.onblur = function() {
	if (LastName.value == "") { // not email
	  LastName.classList.add('invalid');
	  error1.innerHTML = 'Please enter correct Lastname.'
	}
  };
  LastName.onfocus = function(){
	LastName.classList.remove('invalid');
	error1.innerHTML = "";
}
  
  
email.onblur = function() {
	if (!email.value.includes('@')) { // not email
	  email.classList.add('invalid');
	  error2.innerHTML = 'Please enter a valid email.'
	}
  };
  
  email.onfocus = function() {
	if (this.classList.contains('invalid')) {
	  this.classList.remove('invalid');
	  error2.innerHTML = "";
	}
  };

  Mobile.onblur = function() {
	if (Mobile.value == ""|| Mobile.value.length != 10) { // not email
	  Mobile.classList.add('invalid');
	  error3.innerHTML = 'Please enter a correct Mobile number.'
	}
  };
  Mobile.onfocus = function(){
	Mobile.classList.remove('invalid');
	error3.innerHTML = "";
}

select.onblur = function() {
	if (select.value == "none") { // not email
	  select.classList.add('invalid');
	  error4.innerHTML = 'Please select a correct option.'
	}
  };
  select.onfocus = function(){
	select.classList.remove('invalid');
	error4.innerHTML = "";
}