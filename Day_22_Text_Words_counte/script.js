const userText = document.getElementById('inputText');
const charcters = document.getElementById('char');
const totalWords = document.getElementById('words');
userText.addEventListener('input', function(){
    charcters.innerHTML = userText.value.length + 'charcters';
    totalWords.innerHTML = userText.value.trim().split (' ').length + 'words';
})

