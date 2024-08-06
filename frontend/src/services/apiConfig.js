// // import axios from 'axios';

// // const API_BASE_URL = 'http://localhost:5002';

// // const api = axios.create({
// //     baseURL: API_BASE_URL,
// //     headers: {
// //         'Content-Type': 'application/json',
// //     },
// // });

// // export default api;

// import axios from 'axios';

// const API_BASE_URL = 'http://ec2-18-188-132-204.us-east-2.compute.amazonaws.com/api';

// const api = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// export default api;

//import .env



import axios from 'axios';

// const API_BASE_URL = 'http://ec2-18-188-132-204.us-east-2.compute.amazonaws.com/api';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://ec2-18-188-132-204.us-east-2.compute.amazonaws.com/api';

console.log('REACT_APP_API_BASE_URL:', process.env.REACT_APP_API_BASE_URL);
console.log('Initializing API with base URL:', API_BASE_URL);

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

console.log('Axios instance created with the following configuration:');
console.log('Base URL:', api.defaults.baseURL);
console.log('Default headers:', api.defaults.headers);

api.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
});

api.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
}, error => {
    console.error('API Error:', error);
    return Promise.reject(error);
});

console.log('API setup complete');

export default api;
