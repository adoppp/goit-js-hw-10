const apiKey =
  'live_Znai0CuRsyxAQvse25Dry2KjbyRGMjRfcw3zMVZJdHeIBn6qKw0wh9piT16xE8Xc';

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': apiKey,
    },
  }).then(response => response.json());
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`;

  return fetch(url, {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => response.json())
    .then(data => data[0]);
}