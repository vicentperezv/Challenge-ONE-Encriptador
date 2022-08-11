const encryptorKeys = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat',
};

const encryptor = (text) => text.replace(/[aeiou]/g, k => encryptorKeys[k]);
 
const encrypt = () =>{

    const result = document.getElementById('result');
    const text = document.getElementById('text').value;
    result.lastChild.textContent = encryptor(text); 
    document.getElementById('btn-copy').disabled = false;    
}
