function validateDescription(){
    let input_desc = document.getElementById('inp-description')
    if (!isNaN(input_desc) || input_desc.value == "") {
        input_desc.placeholder = 'The input Description is Empty'
        input_desc.style.borderBlockColor = "red"
    }else if(input_desc.value !== "" ){
        input_desc.style.borderBlockColor = "blue"
        // console.log('test')
    }
}function validateDate(){
    let input_date = document.getElementById('inp-date')
    if (!isNaN(input_date) || input_date.value == "") {
        input_date.placeholder = 'The input date is Empty'
        input_date.style.borderBlockColor = "red"
    }else if(input_date.value !== "" ){
        input_date.style.borderBlockColor = "blue"
        // console.log('test')
    }
}function validateUser(){
    let input_user = document.getElementById('inp-user')
    if (!isNaN(input_user) || input_user.value == "") {
        input_user.placeholder = 'The input user is Empty'
        input_user.style.borderBlockColor = "red"
    }else if(input_user.value !== "" ){
        input_user.style.borderBlockColor = "blue"
        // console.log('test')
    }
}