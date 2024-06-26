import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'

})

httpClient.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
})

export default httpClient