const axios = require('axios');

const axiosConfigs = {
  headers: { 'Content-Type': 'application/json' },
};

const LYNLAB_API_ENDPOINT = 'https://apis.lynlab.co.kr'

function auth(password) {
  const data = {
    serviceName: 'LYnGallery',
    username: 'gallery_user',
    password
  }

  return axios.post(`${LYNLAB_API_ENDPOINT}/v1/auth`, data, axiosConfigs)
    .then((response) => {
      return new Promise((resolve) => {
        resolve(response.data.result);
      });
    })
    .catch((error) => {
      console.log(error, error.stack);
    });
}

export { auth };
