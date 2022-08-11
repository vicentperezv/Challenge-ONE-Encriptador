const pattern = new RegExp('^'+'[a-z\u00f1.,¿?¡!0-9 ]{1,}'+'$');

const isValid = () =>{
    const text = document.getElementById('text').value;
    return text.match(pattern);
    
};

const validator = () =>{

    if(!isValid()) {
        document.getElementById('btn-encriptor').disabled = true;
        document.getElementById('btn-descriptor').disabled = true;
    }

    if(isValid()) {
        document.getElementById('btn-encriptor').disabled = false;
        document.getElementById('btn-descriptor').disabled = false;
    }
}
