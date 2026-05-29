const form = document.querySelector('form');
const errorMessage = document.getElementById('error-message');
const result = document.getElementById('result');

const getResultTemplate = (km, age, price) => {
  return /*html*/ `
      <h2>Riepilogo biglietto</h2>

      <dl>
        <dt>Chilometri</dt>
        <dd>${km} km</dd>

        <dt>Età passeggero</dt>
        <dd>${age} anni</dd>

        <dt>Prezzo finale</dt>
        <dd><strong>${price}</strong></dd>
      </dl>
    `;
};

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const km = Number(formData.get('km'));
  const age = Number(formData.get('age'));

  const validationMessage = getValidationMessage(km, age);
  if (validationMessage) {
    errorMessage.textContent = validationMessage;
    result.hidden = true;
    return;
  }

  const price = calculatePrice(km, age);
  const formattedPrice = formatPrice(price);

  // Render
  errorMessage.textContent = '';
  result.innerHTML = getResultTemplate(km, age, formattedPrice);
  result.hidden = false;

  // Reset
  form.reset();
  form.elements.km.focus();
};

form.addEventListener('submit', handleSubmit);
