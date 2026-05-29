const form = document.querySelector('form');

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const km = Number(formData.get('km'));
  const age = Number(formData.get('age'));

  if (!isValidData(km, age)) {
    console.log("Per favore, inserisci un numero valido per i km e l'età.");
    return;
  }

  const price = calculatePrice(km, age);
  const formattedPrice = formatPrice(price);
  console.log(`Il prezzo del biglietto è: ${formattedPrice}`);
};

form.addEventListener('submit', handleSubmit);
