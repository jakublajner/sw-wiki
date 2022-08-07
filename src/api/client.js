import axios from 'axios';
import { buildWebStorage, setupCache } from 'axios-cache-interceptor';
import { API_URL } from '../constants';

const myStorage = buildWebStorage(sessionStorage, 'axios-cache:');

const client = setupCache(
  axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
  }),
  {
    ttl: 60 * 20 * 1000,
    storage: myStorage,
  }
);

export default client;
