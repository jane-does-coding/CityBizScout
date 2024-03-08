import axios from 'axios';

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng"

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
  params: {
    latitude: '40.7608', // Latitude of Salt Lake City
    longitude: '-111.8910', // Longitude of Salt Lake City
    limit: '30',
    currency: 'USD',
    distance: '2',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': '9cdf18411cmsh840e6bf955e5b88p1063acjsne25d4696e8c0',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};
/* 
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
} */

export const getPlacesData = async() => {
  try {
    const {data: {data}} = await axios.get(URL, options)

    return data
  } catch (err) {
    console.log(err)
  }
}