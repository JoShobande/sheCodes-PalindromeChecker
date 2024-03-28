
const inputValue = document.getElementById("userInput");
const result = document.getElementById("inputResult");


function isPalindrome(word) {
    const cleanWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if(word === ''){
        result.textContent = `Please enter a word or a phrase`
    }else if(/[^A-Za-z0-9]/.test(word)){
        result.textContent = `Please do not enter a special character`
    }else{
       
        console.log(cleanWord)
        if(cleanWord === cleanWord.split('').reverse().join('')){
            result.textContent = `Yes! ${word} is a palidrome`
        }else{
            result.textContent = `Nope! ${word} is not a Palindrome`
        }
    }
   
}

function hanldeGetUserInput() {
    isPalindrome(inputValue.value)
}




