import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const selectEl = document.querySelector('.breed-select');
const info = document.querySelector('.cat-info');

fetchBreeds().then(data => renderOptions(data));

function renderOptions(data) {
  selectEl.innerHTML = data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function onInput(evt) {
  const catId = evt.currentTarget.value;
  fetchCatByBreed(catId).then(data => {
    console.log(data[0]);
  });
}

function createMarkup(arr) {
  console.log(arr);
}
selectEl.addEventListener('input', onInput);
