import axios from 'axios';

const API_URL = 'http://193.124.114.46:3001';

export class HttpService {
    apiUrl = API_URL;

    get(path) {
        const request = `${this.apiUrl}/${path}`;
        return axios.get(request);
    }

    post(path, data) {
        const request = `${this.apiUrl}/${path}`;
        return axios.post(request, data);
    }
}
