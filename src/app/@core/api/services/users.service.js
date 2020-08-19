import { HttpService } from './base/http.service';

export const UsersService = {
    getCurrent: () => {
        const path = 'api/protected/user-info';
        return HttpService.get(path);
    },

    getAll: searchQuery => {
        const path = 'api/protected/users/list';
        const data = { filter: searchQuery };
        return HttpService.post(path, data);
    },
};
