const formParent = document.querySelector('#rating-form');
const thankyou = document.querySelector('#thankyou');
const selectionValue = thankyou.querySelector('.rating__selection-value');

const form = document.forms.ratingComponent;
const handleSubmit = (e) => {
  e.preventDefault();
  const rate = form.elements['rating-rate'];
  formParent.classList.add('hidden');
  selectionValue.textContent = rate.value;
  thankyou.classList.remove('hidden');
};

form.addEventListener('submit', handleSubmit);