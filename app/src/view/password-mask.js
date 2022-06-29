function pass() {
    let password = document.getElementById('inp-password')
    if (password.value.length <6) {
        console.log('Error - password must be bigger than 5 digits')   
        password.style.borderBlockColor = 'red';
    }else{
        password.style.borderBlockColor = 'blue';
        
    }
}