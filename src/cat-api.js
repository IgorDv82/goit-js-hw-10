const API_KEY =
  'live_lQr2iV4ee1A2z34XnxsZz5Wmd8jzWg4IDxhs0mOad38EhpdGsyjrQkfwvoB8cSCV';
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?${API_KEY}`).then(resp => resp.json());
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(resp => resp.json());
}
