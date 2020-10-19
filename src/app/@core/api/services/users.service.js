import { HttpService } from './base/http.service';
import { EMPTY_LINE_WITH_SINGLE_SPACE } from '../../../@shared/constants';

export const UsersService = {
    getCurrent: () => {
        const path = 'api/protected/user-info';
        return HttpService.get(path);
    },

    getAll: searchQuery => {
        const path = 'api/protected/users/list';
        const data = { filter: searchQuery || EMPTY_LINE_WITH_SINGLE_SPACE };
        return HttpService.post(path, data);
    },
};
