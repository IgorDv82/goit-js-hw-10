import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const selectEl = document.querySelector('.breed-select');
const infoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
infoEl.setAttribute('style', 'width: 100%; display: flex; gap: 15px ');

fetchBreeds().then(data => renderOptionToSelect(data));

function renderOptionToSelect(data) {
  selectEl.innerHTML = data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function onInput(evt) {
  const catId = evt.currentTarget.value;
  fetchCatByBreed(catId).then(data => {
    createMarkup(...data);
  });
}

function createMarkup({ url, breeds }) {
  infoEl.innerHTML = breeds
    .map(
      ({ description, name }) =>
        `<div><img class="image" src="${url}" alt="cat ${name}" style="max-width: 480px"></div><div><h2>${name}</h2><p class="info">${description}</p></div>`
    )
    .join('');
}
selectEl.addEventListener('input', onInput);
