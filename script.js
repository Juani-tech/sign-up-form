let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm-password');

function validatePassword(){
    if(password.value !== confirm_password.value){
        confirm_password.setCustomValidity('Passwords do not match');
        password.setCustomValidity('Passwords do not match');
    } else {
        confirm_password.setCustomValidity('');
        password.setCustomValidity('');
    }
}
confirm_password.oninput = validatePassword;
password.oninput = validatePassword;