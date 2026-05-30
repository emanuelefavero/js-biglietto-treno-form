const form = document.querySelector('form');
const errorMessage = document.getElementById('error-message');
const result = document.getElementById('result');

const getPlaceholderTemplate = () => {
  return /*html*/ `
      <div class="ticket-header">
        <span class="icon"><i class="bi bi-train-front-fill"></i></span>
        <p>Boolean Express</p>
        <strong>--</strong>
      </div>

      <div class="ticket-route">
        <span>KM</span>
        <span class="route-line">0.21 €/km</span>
        <span>ETA</span>
      </div>

      <dl class="details">
        <div>
          <dt>Chilometri</dt>
          <dd>-- km</dd>
        </div>

        <div>
          <dt>Età passeggero</dt>
          <dd>-- anni</dd>
        </div>

        <div class="price">
          <dt>Prezzo finale</dt>
          <dd><strong>--</strong></dd>
        </div>
      </dl>

      <div class="barcode" aria-hidden="true"></div>
    `;
};

const getResultTemplate = (km, age, price) => {
  return /*html*/ `
      <div class="ticket-header">
        <span class="icon"><i class="bi bi-train-front-fill"></i></span>
        <p>Boolean Express</p>
        <strong>${price}</strong>
      </div>

      <div class="ticket-route">
        <span>${km}</span>
        <span class="route-line">0.21 €/km</span>
        <span>${age}</span>
      </div>

      <dl class="details">
        <div>
          <dt>Chilometri</dt>
          <dd>${km} km</dd>
        </div>

        <div>
          <dt>Età passeggero</dt>
          <dd>${age} anni</dd>
        </div>

        <div class="price">
          <dt>Prezzo finale</dt>
          <dd><strong>${price}</strong></dd>
        </div>
      </dl>

      <div class="barcode" aria-hidden="true"></div>
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
    result.innerHTML = getPlaceholderTemplate();
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

result.innerHTML = getPlaceholderTemplate();
form.addEventListener('submit', handleSubmit);
