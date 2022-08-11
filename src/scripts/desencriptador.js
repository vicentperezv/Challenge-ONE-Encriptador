const decryptorKeys = {
    'ai' : 'a',
    'enter' : 'e',
    'imes' : 'i',
    'ober' : 'o',
    'ufat' : 'u',
};


const decryptor = (text) => text.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/g, k => decryptorKeys[k]);    

const dencrypt = () =>{

    const result = document.getElementById('result');
    const text = document.getElementById('text').value;
    result.lastChild.textContent = decryptor(text); 
    document.getElementById('btn-copy').disabled = false;

    
}
