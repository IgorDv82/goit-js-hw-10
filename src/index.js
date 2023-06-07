import { Report } from 'notiflix/build/notiflix-report-aio';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import './CSS/Style.css';

const selectEl = document.querySelector('.breed-select');
const infoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.load');

hiddenSelect();

fetchBreeds()
  .then(data => {
    renderOptionToSelect(data);
    showSelect();
  })
  .catch(err =>
    Report.failure('Oops!', 'Something went wrong! Try reloading the page!')
  );

function renderOptionToSelect(data) {
  selectEl.innerHTML = data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function onInput(evt) {
  const catId = evt.currentTarget.value;
  infoEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');
  fetchCatByBreed(catId)
    .then(data => {
      {
        createMarkup(...data);
        loaderEl.classList.add('is-hidden');
      }
    })
    .catch(err => {
      loaderEl.classList.add('is-hidden');
      Report.failure('Oops!', 'Something went wrong! Try reloading the page!');
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

function hiddenSelect() {
  selectEl.classList.add('is-hidden');
  loaderEl.classList.remove('is-hidden');
}

function showSelect() {
  selectEl.classList.remove('is-hidden');
  loaderEl.classList.add('is-hidden');
}
