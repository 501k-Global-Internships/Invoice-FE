import axios from 'axios';

const BASE_URL = 'http://localhost:8080';
// const BASE_URL = 'https://invoice-be-nnp4.onrender.com';

export default axios.create({
    baseURL: BASE_URL
});