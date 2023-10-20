function reverseString() {
    const input = document.getElementById('inputString').value;
    let result = "";
    for(let i=input.length-1;i>=0;i--){
        result += input[i];
    }
    document.getElementById('result').textContent = result;
}


function checkPalindrome() {
    const input = document.getElementById('inputPalindrome').value;
    const numLength = input.length;

    let isPalindrome = true;

    for (let i = 0; i < numLength / 2; i++) {
        if (input[i] !== input[numLength - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        document.getElementById('palindromeResult').textContent = 'It\'s a palindrome!';
    } else {
        document.getElementById('palindromeResult').textContent = 'It\'s not a palindrome.';
    }
}



function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    let tipPercentage = parseFloat(document.getElementById('tip').value);

    if (subtotal) {
        tipPercentage = tipPercentage ? tipPercentage : 0;
        const tipAmount = (subtotal * tipPercentage) / 100;
        const totalAmount = subtotal + tipAmount;

        document.getElementById('totalResult').textContent = `Total Amount (including ${tipPercentage}% tip): $${totalAmount.toFixed(2)}`;
    }
    else {
        document.getElementById('totalResult').textContent = `Please Enter valid subtotal amount!`;
    }

}

window.addEventListener('load', function () {
    const subtotalInput = document.getElementById('subtotal');
    const tipInput = document.getElementById('tip');
    const palindromeInput = document.getElementById('inputPalindrome').value;
    const reverseInput = document.getElementById('inputString').value;
    subtotalInput.value = '';
    tipInput.value = '';
    palindromeInput.value = '';
    reverseInput.value = '';
});

//Creating event listeners for on click of ENTER key for the all functions
const inputString = document.getElementById('inputString');
inputString.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        reverseString();
    }
});

const inputPalindrome = document.getElementById('inputPalindrome');
inputPalindrome.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        checkPalindrome();
    }
});