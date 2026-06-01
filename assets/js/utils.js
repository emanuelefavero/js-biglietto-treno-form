const PRICE_PER_KM = 0.21;
const MINOR_DISCOUNT = 0.2;
const SENIOR_DISCOUNT = 0.4;
const MINOR_AGE = 18;
const SENIOR_AGE = 65;
const MAX_KM = 5000;
const ROUTE_SEPARATOR = ' - ';

const getValidationMessage = (km, age) => {
  const validKm = !Number.isNaN(km) && km > 0 && km <= MAX_KM;
  if (!validKm) {
    return 'Per favore, seleziona una tratta valida.';
  }

  const validAge = !Number.isNaN(age) && age > 0 && age <= 120;
  if (!validAge) {
    return "Per favore, inserisci un numero valido per l'età.";
  }

  return '';
};

const getRouteInfo = (select) => {
  const routeName = select.selectedOptions[0].text;
  const separatorIndex = routeName.indexOf(ROUTE_SEPARATOR);

  return {
    departure: routeName.slice(0, separatorIndex),
    arrival: routeName.slice(separatorIndex + ROUTE_SEPARATOR.length),
  };
};

const getDiscount = (age) => {
  let discount = 0;

  if (age < MINOR_AGE) {
    discount = MINOR_DISCOUNT;
  } else if (age >= SENIOR_AGE) {
    discount = SENIOR_DISCOUNT;
  }

  return discount;
};

const getTariffLabel = (age) => {
  let label = 'Tariffa Standard';

  if (age < MINOR_AGE) {
    label = 'Tariffa Under 18';
  } else if (age >= SENIOR_AGE) {
    label = 'Tariffa Senior';
  }

  return label;
};

const calculateBasePrice = (km) => {
  return km * PRICE_PER_KM;
};

const calculatePrice = (km, age) => {
  const basePrice = calculateBasePrice(km);
  const discount = getDiscount(age);

  return basePrice * (1 - discount);
};

const formatDiscount = (discount) => {
  if (discount === 0) {
    return '';
  }

  return `-${discount * 100}%`;
};

const formatDate = (date) => {
  return date.toLocaleDateString('it-IT');
};

const formatPrice = (price) => {
  return price.toLocaleString('it-IT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
  });
};
