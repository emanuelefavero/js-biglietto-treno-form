const form = document.querySelector('form');
const routeSelect = document.getElementById('route');
const errorMessage = document.getElementById('error-message');
const result = document.getElementById('result');

/**
 * Orchestrator submit handler: reads form values, validates them, prepares the data object for rendering, and renders the result or error message.
 */
const handleSubmit = (event) => {
  event.preventDefault();

  // Read
  const formData = new FormData(form);
  const route = getSelectedRoute(formData.get('route'));
  const km = route ? route.km : NaN; // Get km from selected route
  const age = Number(formData.get('age'));

  // Validate
  const validationMessage = getValidationMessage(km, age);
  if (validationMessage) {
    errorMessage.textContent = validationMessage;
    result.classList.remove('is-printing');
    result.classList.add('is-placeholder');
    result.innerHTML = getPlaceholderTemplate();
    return;
  }

  // Prepare data
  const basePrice = calculateBasePrice(km);
  const discount = getDiscount(age);
  const price = calculatePrice(km, age);

  const ticket = {
    km,
    age,
    departure: route.departure,
    arrival: route.arrival,
    tariff: getTariffLabel(age),
    date: formatDate(new Date()),
    basePrice: formatPrice(basePrice),
    discount: formatDiscount(discount),
    finalPrice: formatPrice(price),
    saving: formatPrice(basePrice - price),
    hasDiscount: discount > 0,
  };

  // Render
  errorMessage.textContent = '';
  result.classList.remove('is-placeholder', 'is-printing');
  result.innerHTML = getResultTemplate(ticket); // Render result
  void result.offsetWidth; // Force animation restart on next submit
  result.classList.add('is-printing');
};

// Initial setup
result.classList.add('is-placeholder'); // Result initial state (placeholder)
result.innerHTML = getPlaceholderTemplate(); // Render placeholder
routeSelect.innerHTML += getRouteOptionsTemplate(); // Render route options
form.addEventListener('submit', handleSubmit);
