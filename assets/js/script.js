const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const km = Number(formData.get('km'));
  const age = Number(formData.get('age'));

  console.log(km, age);
});
