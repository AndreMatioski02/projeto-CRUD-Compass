
function ageCalc(){
    let age = document.querySelector('#inp-birthdate')
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
    if (getAge(age.value) > 17) {
        console.log('Password correct')
    }else{
        console.log('password incorrect')
        alert('the age must be over 18!')
    }
    
        
}