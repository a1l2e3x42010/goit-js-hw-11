import axios from 'axios';

const API_KEY = '37183534-657d143d87468d9661792d66d';
const URL = 'https://pixabay.com/api/';
const PER_PAGE = 40;

export async function getImages(searchQuery, pageCount) {
  const params = {
    params: {
      timeout: 1000,
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: pageCount,
      per_page: PER_PAGE,
    },
  };

  const response = await axios.get(URL, params);
  return response.data;
}
