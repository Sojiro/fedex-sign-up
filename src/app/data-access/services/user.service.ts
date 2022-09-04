import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  create(user: User) {
    return this.http.post('https://demo-api.now.sh/users', user);
  }
}
