import axios from 'axios';

const API_KEY = "45394246-b0bcbecb9a855c02e72fa5a2f";
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function fetchImages(query, page = 1) {
    const response = await axios.get(`${BASE_URL}`, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            page: page,
            per_page: PER_PAGE
        }
    });
    return response.data;
}