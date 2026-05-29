const PRICE_PER_KM = 0.21;
const MINOR_DISCOUNT = 0.2;
const SENIOR_DISCOUNT = 0.4;
const MINOR_AGE = 18;
const SENIOR_AGE = 65;

const isValidData = (km, age) => {
  return !isNaN(km) && km > 0 && !isNaN(age) && age > 0;
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
