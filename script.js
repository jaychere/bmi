function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid values for height and weight.');
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Your BMI: ' + bmi.toFixed(2);
}
