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
    result.classList.remove('is-printing');
    result.classList.add('is-placeholder');
    result.innerHTML = getPlaceholderTemplate();
    return;
  }

  const price = calculatePrice(km, age);
  const formattedPrice = formatPrice(price);

  // Render
  errorMessage.textContent = '';
  result.classList.remove('is-placeholder', 'is-printing');
  result.innerHTML = getResultTemplate(km, age, formattedPrice);
  void result.offsetWidth; /* force animation restart on next submit */
  result.classList.add('is-printing');

  // Reset
  form.reset();
};

result.classList.add('is-placeholder');
result.innerHTML = getPlaceholderTemplate();
form.addEventListener('submit', handleSubmit);
