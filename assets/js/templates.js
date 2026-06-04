// ROUTES Select Options
const getRouteOptionTemplate = (route, index) => {
  return /*html*/ `
      <option value="${index}">
        ${route[ROUTE_DEPARTURE]} - ${route[ROUTE_ARRIVAL]}
      </option>
    `;
};

const getRouteOptionsTemplate = () => {
  let options = '';

  for (let i = 0; i < ROUTES.length; i++) {
    options += getRouteOptionTemplate(ROUTES[i], i);
  }

  return options;
};

// TICKET
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
        <p>Tariffa</p>
        <strong>--/--/----</strong>
      </div>

      <div class="ticket-route">
        <span class="route-point">
          <strong>Partenza</strong>
          <small>Origine</small>
        </span>
        <span class="route-line">
          <i class="bi bi-arrow-right" aria-hidden="true"></i>
          <small>-- km</small>
        </span>
        <span class="route-point">
          <strong>Arrivo</strong>
          <small>Destinazione</small>
        </span>
      </div>

      <div class="details">
        <dl class="details-list">
          <div>
            <dt>Età passeggero</dt>
            <dd>-- anni</dd>
          </div>

          <div>
            <dt>Tariffa km</dt>
            <dd>0,21 €/km</dd>
          </div>

          <div>
            <dt>Totale stimato</dt>
            <dd>
              <span class="price-summary">
                <span class="base-price">--</span>
                <span class="discount">--</span>
              </span>
            </dd>
          </div>
        </dl>

        <dl class="price">
          <div>
            <dt class="visually-hidden">Totale finale</dt>
            <dd>
              <span class="final-price">
                <strong>--</strong>
              </span>
            </dd>
          </div>
        </dl>
      </div>

      <div class="barcode" aria-hidden="true"></div>
    `;
};

const getResultTemplate = (
  km,
  age,
  departure,
  arrival,
  tariff,
  date,
  basePrice,
  discount,
  finalPrice,
  saving,
  hasDiscount,
) => {
  const emptyClass = hasDiscount ? '' : 'is-empty';

  return /*html*/ `
      ${getTicketShapeTemplate()}

      <div class="ticket-header">
        <span class="icon"><i class="bi bi-train-front-fill"></i></span>
        <p>${tariff}</p>
        <strong>${date}</strong>
      </div>

      <div class="ticket-route">
        <span class="route-point">
          <strong>${departure}</strong>
          <small>Partenza</small>
        </span>
        <span class="route-line">
          <i class="bi bi-arrow-right" aria-hidden="true"></i>
          <small>${km} km</small>
        </span>
        <span class="route-point">
          <strong>${arrival}</strong>
          <small>Arrivo</small>
        </span>
      </div>

      <div class="details">
        <dl class="details-list">
          <div>
            <dt>Età passeggero</dt>
            <dd>${age} anni</dd>
          </div>

          <div>
            <dt>Tariffa km</dt>
            <dd>0,21 €/km</dd>
          </div>

          <div>
            <dt>Totale stimato</dt>
            <dd>
              <span class="price-summary">
                <span class="base-price ${emptyClass}">${basePrice}</span>
                <span class="discount ${emptyClass}">${discount}</span>
              </span>
            </dd>
          </div>
        </dl>

        <dl class="price">
          <div>
            <dt class="visually-hidden">Totale finale</dt>
            <dd>
              <span class="final-price">
                <strong>${finalPrice}</strong>
                <span class="saving ${emptyClass}">
                  <span>Risparmio</span>
                  <strong>${saving}</strong>
                </span>
              </span>
            </dd>
          </div>
        </dl>
      </div>

      <div class="barcode" aria-hidden="true"></div>
    `;
};
