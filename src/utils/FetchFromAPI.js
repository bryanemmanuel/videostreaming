import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {

    url: 'BASE_URL',
    params: {
     maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '37525c70e6mshb53fbe2a82da89cp1da09bjsn12a277fddb64',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }

  };
  

  
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};