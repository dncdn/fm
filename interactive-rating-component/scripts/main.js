const form = document.forms.ratingComponent;
const thankyou = document.querySelector('#thankyou')
const selectionValue = thankyou.querySelector('.rating__selection-value')

const handleSubmit = (e) => {
  e.preventDefault();
  const rate = form.elements['rating-rate'];
  form.classList.add('hidden');
  selectionValue.textContent = rate.value;
  thankyou.classList.remove('hidden');
};

form.addEventListener('submit', handleSubmit);