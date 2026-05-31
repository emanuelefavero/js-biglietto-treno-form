const getTicketShapeTemplate = () => {
  return /*html*/ `
      <svg
        class="ticket-shape ticket-fill"
        viewBox="0 0 640 760"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M12 1 H628 Q639 1 639 12 V220 A24 24 0 0 0 639 268 V720 Q639 759 600 759 H40 Q1 759 1 720 V268 A24 24 0 0 0 1 220 V12 Q1 1 12 1 Z"
        />
      </svg>
      <svg
        class="ticket-shape ticket-outline"
        viewBox="0 0 640 760"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M12 1 H628 Q639 1 639 12 V220 A24 24 0 0 0 639 268 V720 Q639 759 600 759 H40 Q1 759 1 720 V268 A24 24 0 0 0 1 220 V12 Q1 1 12 1 Z"
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
        <span>ETÀ</span>
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
