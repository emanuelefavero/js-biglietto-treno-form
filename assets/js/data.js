const PRICE_PER_KM = 0.21;
const MINOR_DISCOUNT = 0.2;
const SENIOR_DISCOUNT = 0.4;
const MINOR_AGE = 18;
const SENIOR_AGE = 65;
const MAX_KM = 5000;
const ROUTE_DEPARTURE = 0;
const ROUTE_ARRIVAL = 1;
const ROUTE_KM = 2;

const ROUTES = [
  ['Milano', 'Roma', 564],
  ['Milano', 'Torino', 140],
  ['Milano', 'Venezia', 270],
  ['Milano', 'Bologna', 215],
  ['Roma', 'Napoli', 225],
  ['Roma', 'Firenze', 275],
  ['Roma', 'Bologna', 380],
  ['Bologna', 'Firenze', 110],
  ['Bologna', 'Venezia', 155],
  ['Napoli', 'Bari', 260],
  ['Napoli', 'Salerno', 55],
  ['Torino', 'Genova', 170],
  ['Firenze', 'Pisa', 90],
  ['Venezia', 'Trieste', 160],
  ['Palermo', 'Messina', 225],
];
