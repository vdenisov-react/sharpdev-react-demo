import { HttpService } from './base/http.service';

export const DealsService = {
    getAll: () => {
        const path = 'api/protected/transactions';
        return HttpService.get(path);
    },
};
