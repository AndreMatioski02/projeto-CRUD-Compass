function cpfMask(){
    const inputCPF = document.querySelectorAll('.cpfmask')

    for(let i = 0; i < inputCPF.length; i++){
        inputCPF[i].addEventListener('keypress', () => {
            let inputLength = inputCPF[i].value.length
    
            if(inputLength === 3) {
                inputCPF[i].value += '.'
            } else if (inputLength === 7){
                inputCPF[i].value += '.'
            } else if (inputLength === 11){
                inputCPF[i].value += '-'
            }
        });
    
        inputCPF[i].addEventListener('keypress', (event) => {
            let keyCode = (event.keyCode ? event.keyCode : event.wich);
    
            if(keyCode < 47 || keyCode > 58){
                event.preventDefault();
            }
        });
    }

}