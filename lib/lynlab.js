const axios = require('axios');

const axiosConfigs = {
  headers: { 'Content-Type': 'application/json' },
};

const LYNLAB_API_ENDPOINT = 'https://apis.lynlab.co.kr'

// private
function get(path, params) {
  return axios.get(`${LYNLAB_API_ENDPOINT}${path}`, { params }, axiosConfigs)
    .then((response) => {
      return new Promise((resolve) => {
        resolve(response.data.result);
      });
    })
    .catch((error) => {
      console.log(error, error.stack);
    });
}

// private
function post(path, data) {
  return axios.post(`${LYNLAB_API_ENDPOINT}${path}`, data, axiosConfigs)
    .then((response) => {
      return new Promise((resolve) => {
        resolve(response.data.result);
      });
    })
    .catch((error) => {
      console.log(error, error.stack);
    });
}

function auth(password) {
  const data = {
    serviceName: 'LYnGallery',
    username: 'gallery_user',
    password,
  }

  return post('/v1/auth', data);
}

async function getGalleryGroups() {
  const groups = await get('/v1/gallery/groups');

  const results = [];
  groups.forEach(async (group) => {
    const photos = await get('/v1/gallery/groups/photos', { groupName: group.groupName });
    results.push({
      groupName: group.groupName,
      photos: photos.filter((photo) => { return !photo.src.endsWith('/') }),
    });
  });

  return results.sort((a, b) => a.order > b.order);
}

export { auth, getGalleryGroups };
