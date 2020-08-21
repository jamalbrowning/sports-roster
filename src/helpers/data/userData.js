import axios from 'axios';

import utils from '../utils';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getUsersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

export default { getUsersByUid };
