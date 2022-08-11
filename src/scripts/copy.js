const copy = (text) => navigator.clipboard.writeText(text);


const copyResult = () => copy(document.getElementById('result').lastChild.textContent);
