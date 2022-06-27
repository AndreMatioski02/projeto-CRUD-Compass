
function ageCalc(){
    let age = document.querySelector('#inp-birthdate')
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
    if (getAge(age.value) > 19) {
        console.log('deu boa')
    }else{
        console.log('deuruim')
        alert('idade menor de 18 anos')
    }
    
        
}