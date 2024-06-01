const form = document.querySelector('form');
// this usecase will give you  empty 
// const height =  parseInt(document.querySelector('#height'))
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    result.innerHTML = 'Please enter a valid height';
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = 'Please enter a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi <= 18.6) {
      result.innerHTML = `<span>Under weight: ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>Normal weight: ${bmi}</span>`;
    } else {
      result.innerHTML = `<span>Over weight: ${bmi}</span>`;
    }
  }
});