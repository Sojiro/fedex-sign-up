import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, tap } from 'rxjs';

export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const API = 'https://demo-api.now.sh/users';
@Injectable()
export class UserService {
  // TODO: Replace it with appropriate NgRx store.
  readonly userRegistry$ = new ReplaySubject<User>(1);

  constructor(private http: HttpClient) {}

  create(user: User) {
    return this.http
      .post<User>(API, user)
      .pipe(tap((newUser) => this.userRegistry$.next(newUser)));
  }

  newlyCreated() {
    return this.userRegistry$.asObservable();
  }
}
