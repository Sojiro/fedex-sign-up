import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator/jest';
import { API, User, UserService } from './user.service';

describe(UserService.name, () => {
  let spec: SpectatorHttp<UserService>;
  let service: UserService;
  const createService = createHttpFactory(UserService);

  beforeEach(() => {
    spec = createService();
    service = spec.service;
  });

  it('should be created', () => {
    expect(service).toBeInstanceOf(UserService);
  });

  it('can create user', () => {
    const firstName = 'Sojiro';
    service
      .create({
        firstName,
      } as User)
      .subscribe();

    const req = spec.expectOne(API, HttpMethod.POST);
    expect(req.request.body['firstName']).toEqual(firstName);
  });

  it('should store newly created', () => {
    const firstName = 'Sojiro';

    service
      .newlyCreated()
      .subscribe((user) => expect(user.firstName).toBe(firstName));

    service.userRegistry$.next({ firstName } as User);
  });
});
