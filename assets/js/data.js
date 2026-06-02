const PRICE_PER_KM = 0.21;
const MINOR_DISCOUNT = 0.2;
const SENIOR_DISCOUNT = 0.4;
const MINOR_AGE = 18;
const SENIOR_AGE = 65;
const MAX_KM = 5000;

const ROUTES = [
  { departure: 'Milano', arrival: 'Roma', km: 564 },
  { departure: 'Milano', arrival: 'Torino', km: 140 },
  { departure: 'Milano', arrival: 'Venezia', km: 270 },
  { departure: 'Milano', arrival: 'Bologna', km: 215 },
  { departure: 'Roma', arrival: 'Napoli', km: 225 },
  { departure: 'Roma', arrival: 'Firenze', km: 275 },
  { departure: 'Roma', arrival: 'Bologna', km: 380 },
  { departure: 'Bologna', arrival: 'Firenze', km: 110 },
  { departure: 'Bologna', arrival: 'Venezia', km: 155 },
  { departure: 'Napoli', arrival: 'Bari', km: 260 },
  { departure: 'Napoli', arrival: 'Salerno', km: 55 },
  { departure: 'Torino', arrival: 'Genova', km: 170 },
  { departure: 'Firenze', arrival: 'Pisa', km: 90 },
  { departure: 'Venezia', arrival: 'Trieste', km: 160 },
  { departure: 'Palermo', arrival: 'Messina', km: 225 },
];
