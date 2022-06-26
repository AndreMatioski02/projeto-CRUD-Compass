function cpfMask(){
    const inputCPF = document.querySelector('#inp-cpf')

    inputCPF.addEventListener('keypress', () => {
        let inputLength = inputCPF.value.length

        if(inputLength === 3) {
            inputCPF.value += '.'
        } else if (inputLength === 7){
            inputCPF.value += '.'
        } else if (inputLength === 11){
            inputCPF.value += '-'
        }
    });

    inputCPF.addEventListener('keypress', (event) => {
        let keyCode = (event.keyCode ? event.keyCode : event.wich);

        if(keyCode < 47 || keyCode > 58){
            event.preventDefault();
        }
    });
}