import { HttpService } from './base/http.service';

export class AuthService {
    http = new HttpService();

    login(email, password) {
        const path = 'sessions/create';
        const data = { email, password };
        return this.http.post(path, data);
    }

    register(email, password) {
        const path = 'sessions/create';
        const data = { email, password };
        return this.http.post(path, data);
    }
}
