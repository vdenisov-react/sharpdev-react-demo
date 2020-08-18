import axios from 'axios';
import { LocalStorageService } from '../../../services';

const API_URL = 'http://193.124.114.46:3001';

function _generateHeaders() {
    const headers = {};

    // "Authorization"
    const accessToken = LocalStorageService.get('token');
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }
    // ---

    return headers;
}

export const HttpService = {
    get: path => {
        const request = `${API_URL}/${path}`;
        return axios.get(request, { headers: _generateHeaders() });
    },

    post: (path, data) => {
        const request = `${API_URL}/${path}`;
        return axios.post(request, data, { headers: _generateHeaders() });
    },
};
