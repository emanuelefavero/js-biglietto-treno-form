const form = document.querySelector('form');
const errorMessage = document.getElementById('error-message');
const result = document.getElementById('result');

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const km = Number(formData.get('km'));
  const age = Number(formData.get('age'));

  const validationMessage = getValidationMessage(km, age);
  if (validationMessage) {
    errorMessage.textContent = validationMessage;
    result.innerHTML = getPlaceholderTemplate();
    return;
  }

  const price = calculatePrice(km, age);
  const formattedPrice = formatPrice(price);

  // Render
  errorMessage.textContent = '';
  result.innerHTML = getResultTemplate(km, age, formattedPrice);

  // Reset
  form.reset();
};

result.innerHTML = getPlaceholderTemplate();
form.addEventListener('submit', handleSubmit);
