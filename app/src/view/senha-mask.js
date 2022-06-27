function pass(){

        let password = document.getElementById('inp-password')
        if (password.value.length > 5) {
            console.log('Ta ok')
        }else{
            console.log('n ta ok')
            password.value = "Senha errada"
        }
}