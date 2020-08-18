import { HttpService } from './base/http.service';

export const AuthService = {
    login: (email, password) => {
        const path = 'sessions/create';
        const data = { email, password };
        return HttpService.post(path, data);
    },

    register: (email, username, password) => {
        const path = 'users';
        const data = { email, username, password };
        return HttpService.post(path, data);
    },

    getCurrentUser: () => {
        const path = 'api/protected/user-info';
        return HttpService.get(path);
    },
};
