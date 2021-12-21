import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '24042755-bf22cff341e4e7dedcdedf3c3';

async function fetchImages({ query = '', page = 1, perPage = 12 }) {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  );
  return data.hits;
}

export { fetchImages };