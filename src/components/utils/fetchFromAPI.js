import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
      },
    headers: {
      'X-RapidAPI-Key': '5f939d488dmsh5ab7b3eb1729452p14471djsn97072e2d64f9',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}` ,options);

    return data;
  }