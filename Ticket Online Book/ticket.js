const formValidation = ()=>{
let username = document.myform.username.value;
let password = document.myform.password.value;
let name = document.myform.name.value;
let fname = document.myform.fname.value
var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

if(username=='' ||username==undefined){
    alert('username cannot be null')
    document.myform.username.focus();
    return false
}
else if(password==''){
    alert('password cannot be null')
    document.myform.password.focus()
    return false;
}
else if (password.length < 4 || password.length >= 8){
    alert('Password length should be between 4 and 7 characters');
    document.myform.username.focus();
    return false
}
else if(!(regName.test(name) || regName.test(fname))){
    alert('Please write Full Name with space like Nazir Ansari')
    document.myform.username.focus();
    return false
}

return false;
}