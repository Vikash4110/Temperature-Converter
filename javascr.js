document.getElementById('convertBtn').addEventListener('click', function () {
    const celsiusInput = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsiusInput * 9/5) + 32;
    document.getElementById('result').textContent = `${celsiusInput}°C is ${fahrenheit.toFixed(2)}°F`;
});
