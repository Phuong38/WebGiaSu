﻿// function checkDangyeucau(fn){

// }
function checkName(fn){
	var name = fn.name.value;
	var message= "";
	var view= document.getElementById("viewValidName");
	if(name == ""){
		message = "Yêu cầu nhập tên để đăng ký làm gia sư";
	}
	else{
		if(name.length<6||name.length>50){
			message="Tên cần  dài hơn 5 ký tự và nhỏ hơn 50 ký tự!";
		
		}else{
			var parttern=/^[0-9]$/;
			if(name.match(parttern)){
				validUserName=false;
				message="Tên không có chữ số!";
			}else{
				message="";
			}
		}
	}
	if(message!=""){
		view.style.color="red";
		view.innerHTML= message;
		return false;
	}else{
		view.innerHTML= "";
		return true;
	}
}

function checkEmail(fn){
	var emailValue = fn.email.value;
	var message= "";
	var view= document.getElementById("viewValidEmail");
	if(emailValue == ""){
		message = "Yêu cầu nhập email để đăng ký làm gia sư!";
	}
	else {
		if(emailValue.length<6||emailValue.length>50){
			message="Yêu cầu nhập đầy đủ email!";
		}
		else {
			if(emailValue.indexOf("@")!=-1){

			var parttern=/\w+@+\w+[.]\w/;
			if(!emailValue.match(parttern)){
				message="Không đúng cấu trúc !";
			}
			else{
				message ="" ;
			}
			}
			else{
				message="Không đúng cấu trúc !";
			}
		}
	}
	if(message!=""){
		view.style.color="red";
		view.innerHTML= message;
		return false;
	}else{
		view.innerHTML= "";
		return true;
	}
}
//check password
function checkPass(fn){
	var pass1=fn.password.value;
	var pass2=fn.password1.value;
	var view=document.getElementById("viewValidPass");
	var isOK = false;
	if(pass1 ==""){
		view.innerHTML = "Hãy nhập mật khẩu cho tài khoản";
	}
	else{
		if(pass1.length<6){
			view.innerHTML="Độ dài mật khẩu cần lớn hơn 5 ký tự!";
			
		}else{
			if(pass1.trim()!=pass2.trim()){
				var message="Mật khẩu không khớp nhau xin kiểm tra lại";
				view.innerHTML=message;
				
			}else{
				view.innerHTML="<i class=\"fa fa-check\"></i>";
				
				isOK= true;
			}
		}
	}
	if(isOK){
		view.style.color="green";
	}else{
		view.style.color="red";
	}
	return isOK;
	
}