const form = document.querySelector('form');
const errorMessage = document.getElementById('error-message');
const result = document.getElementById('result');

const getTicketShapeTemplate = () => {
  return /*html*/ `
      <svg
        class="ticket-shape ticket-fill"
        viewBox="0 0 640 760"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M40 1 H600 Q639 1 639 40 V220 A24 24 0 0 0 639 268 V720 Q639 759 600 759 H40 Q1 759 1 720 V268 A24 24 0 0 0 1 220 V40 Q1 1 40 1 Z"
        />
      </svg>
      <svg
        class="ticket-shape ticket-outline"
        viewBox="0 0 640 760"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M40 1 H600 Q639 1 639 40 V220 A24 24 0 0 0 639 268 V720 Q639 759 600 759 H40 Q1 759 1 720 V268 A24 24 0 0 0 1 220 V40 Q1 1 40 1 Z"
        />
      </svg>
    `;
};

const getPlaceholderTemplate = () => {
  return /*html*/ `
      ${getTicketShapeTemplate()}

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
      ${getTicketShapeTemplate()}

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
