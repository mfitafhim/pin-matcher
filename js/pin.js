function getPin() {
    let pin = genaratePin();
    let pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }

}
function genaratePin() {
    let random = Math.round(Math.random() * 10000)
    return random;
}

document.getElementById('generate-btn').addEventListener('click', () => {
    let pin = getPin();
    let pinShow = document.getElementById('genarate-field');
    pinShow.value = pin;
})

document.getElementById('calculator').addEventListener('click', (event) => {
    const number = event.target.innerText;
    const calculatorForm = document.getElementById('cal-form');
    const prevTypeNumber = calculatorForm.value;
    if (isNaN(number)) {
        if (number === 'C') {
            calculatorForm.value = '';
        } else if (number === '<') {
            const digits = prevTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            calculatorForm.value = remainingDigits;
        }
    } else {
        let newNumber = prevTypeNumber + number;
        calculatorForm.value = newNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', () => {
    let pinShow = document.getElementById('genarate-field');
    let pin = pinShow.value;
    const calculatorForm = document.getElementById('cal-form');
    let myPin = calculatorForm.value;

    const failedPin = document.getElementById('msg-failed');
    const successPin = document.getElementById('msg-success');

    if (pin === myPin) {
        successPin.style.display = 'block';
        failedPin.style.display = 'none';
    } else {
        failedPin.style.display = 'block';
        successPin.style.display = 'none';
    }
})