const form = document.querySelector('form');
const routeSelect = document.getElementById('route');
const errorMessage = document.getElementById('error-message');
const result = document.getElementById('result');
const printSound = new Audio('assets/audio/ticket-print.mp3');

/**
 * Orchestrator submit handler: reads form values, validates them, prepares the ticket data, and renders the result or error message.
 */
const handleSubmit = (event) => {
  event.preventDefault();

  // Read
  const formData = new FormData(form);
  const route = getSelectedRoute(formData.get('route'));
  const km = route ? route[ROUTE_KM] : NaN; // Get km from selected route
  const age = Number(formData.get('age'));

  // Validate
  const validationMessage = getValidationMessage(km, age);
  if (validationMessage) {
    errorMessage.textContent = validationMessage;
    result.classList.remove('is-printing');
    result.classList.add('is-placeholder');
    result.innerHTML = getPlaceholderTemplate();
    stopSound(printSound);
    return;
  }

  // Prepare data
  const basePrice = calculateBasePrice(km);
  const discount = getDiscount(age);
  const price = calculatePrice(km, age);
  const departure = route[ROUTE_DEPARTURE];
  const arrival = route[ROUTE_ARRIVAL];
  const tariff = getTariffLabel(age);
  const date = formatDate(new Date());
  const formattedBasePrice = formatPrice(basePrice);
  const formattedDiscount = formatDiscount(discount);
  const finalPrice = formatPrice(price);
  const saving = formatPrice(basePrice - price);
  const hasDiscount = discount > 0;

  // Render
  errorMessage.textContent = '';
  result.classList.remove('is-placeholder', 'is-printing');
  result.innerHTML = getResultTemplate(
    km,
    age,
    departure,
    arrival,
    tariff,
    date,
    formattedBasePrice,
    formattedDiscount,
    finalPrice,
    saving,
    hasDiscount,
  ); // Render result
  void result.offsetWidth; // Force animation restart on next submit
  result.classList.add('is-printing');
  playSound(printSound);
};

// Initial setup
result.classList.add('is-placeholder'); // Result initial state (placeholder)
result.innerHTML = getPlaceholderTemplate(); // Render placeholder
routeSelect.innerHTML += getRouteOptionsTemplate(); // Render route options
form.addEventListener('submit', handleSubmit);
