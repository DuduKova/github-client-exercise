import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = 'https://api.github.com/user';
    }

    get(id: number = null): Observable<UserModel> {
        if (id) {
            return this.httpClient.get<UserModel>(`${this.baseUrl}/${id}`);
        }
    }

    create(u: UserModel) {

    }

    update(u: UserModel) {

    }

    delete(id: number) {
    }
}
