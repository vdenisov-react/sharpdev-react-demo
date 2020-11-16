import { HttpService } from './base/http.service';

export const DealsService = {
    getAll: () => {
        const path = 'api/protected/transactions';
        return HttpService.get(path);
    },

    addNew: (user, amount) => {
        const path = 'api/protected/transactions';
        const data = { name: user, amount };
        console.log('DATA =>', data);
        return HttpService.post(path, data);
    },
};
