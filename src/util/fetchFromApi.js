import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// relatedToVideoId: "7ghhRHRP6t4",
// part: "id,snippet",
// type: "video",
