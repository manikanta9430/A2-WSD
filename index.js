function reverseString() {
    const input = document.getElementById('inputString').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('result').textContent = reversed;
}


function checkPalindrome() {
    const input = document.getElementById('inputPalindrome').value;
    const cleaned = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    if (cleaned === reversed) {
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