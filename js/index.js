
function RegistrationInfo(){

if (document.getElementById('same').checked){  //once the checkbox is checked then copy the values  
      
   document.getElementById('username_verify').value = document.getElementById('username').value;
   document.getElementById('email_verify').value = document.getElementById('email').value;
     
	}
else{ //once unchecked, empty the box
			
	document.getElementById('username_verify').value = "";
	document.getElementById('email_verify').value = "";
	}
}