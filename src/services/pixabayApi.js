import axios from 'axios';

const API_KEY = '24042755-bf22cff341e4e7dedcdedf3c3';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages({ query = '', page = 1, perPage = 12 }) {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(response => response.data.hits);
}

export { fetchImages };