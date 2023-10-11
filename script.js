function convertUnits() {
    const fromUnit = document.getElementById('fromUnit').value;
    const unitType = document.getElementById('unitType').value;
    let toUnit;
    let fromUnitLabel;
    let toUnitLabel;
    const body = document.body;
    let imageUrl;

    switch (unitType) {
        case 'length':
            imageUrl = 'len_bg.jpg';
            toUnit = fromUnit * 100; // Convert meters to centimeters
            fromUnitLabel = 'meters';
            toUnitLabel = 'centimeters';
            break;
        case 'weight':
            imageUrl = 'weight_bg.jpg';
            toUnit = fromUnit * 1000; // Convert kilograms to grams
            fromUnitLabel = 'kilograms';
            toUnitLabel = 'grams';
            break;
        case 'volume':
            imageUrl = 'vol_bg.jpg';
            toUnit = fromUnit * 1000; // Convert liters to milliliters
            fromUnitLabel = 'liters';
            toUnitLabel = 'milliliters';
            break;
        case 'temperature':
            imageUrl = 'temp_bg.jpg';
            toUnit = (fromUnit - 32) * 5/9; // Convert Fahrenheit to Celsius
            fromUnitLabel = 'Fahrenheit';
            toUnitLabel = 'Celsius';
            break;
        default:
            break;
    }
    body.style.backgroundImage = `url(${imageUrl})`;

    document.getElementById('toUnit').value = toUnit.toFixed(2);
    document.getElementById('fromUnitTypeLabel').textContent = fromUnitLabel;
    document.getElementById('toUnitTypeLabel').textContent = toUnitLabel;
}

function changeUnitType() {
    document.getElementById('fromUnit').value = '';
    document.getElementById('toUnit').value = '';
    convertUnits();
}

document.addEventListener('DOMContentLoaded', function() {
    convertUnits();
});
