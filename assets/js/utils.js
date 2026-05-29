const PRICE_PER_KM = 0.21;
const MINOR_DISCOUNT = 0.2;
const SENIOR_DISCOUNT = 0.4;
const MINOR_AGE = 18;
const SENIOR_AGE = 65;

const getValidationMessage = (km, age) => {
  const validKm = !isNaN(km) && km > 0;
  if (!validKm) {
    return 'Per favore, inserisci un numero valido per i km.';
  }

  const validAge = !isNaN(age) && age > 0 && age <= 120;
  if (!validAge) {
    return "Per favore, inserisci un numero valido per l'età.";
  }

  return '';
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

const calculatePrice = (km, age) => {
  const basePrice = km * PRICE_PER_KM;
  const discount = getDiscount(age);

  return basePrice * (1 - discount);
};

const formatPrice = (price) => {
  return price.toLocaleString('it-IT', {
    style: 'currency',
    currency: 'EUR',
  });
};
