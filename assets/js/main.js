const form = document.querySelector('form');
const routeSelect = document.getElementById('km');
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

  const basePrice = calculateBasePrice(km);
  const discount = getDiscount(age);
  const price = calculatePrice(km, age);
  const route = getRouteInfo(routeSelect);

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
  result.innerHTML = getResultTemplate(ticket);
  void result.offsetWidth; /* force animation restart on next submit */
  result.classList.add('is-printing');
};

result.classList.add('is-placeholder');
result.innerHTML = getPlaceholderTemplate();
form.addEventListener('submit', handleSubmit);
