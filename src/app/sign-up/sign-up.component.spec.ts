import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import {
  Spectator,
  createComponentFactory,
  createSpyObject,
} from '@ngneat/spectator/jest';

import { SignUpComponent } from './sign-up.component';
import { Router } from '@angular/router';
import { User, UserService } from '../data-access';
import { of, Subscription } from 'rxjs';
import { JsonpInterceptor } from '@angular/common/http';

describe(SignUpComponent.name, () => {
  let spec: Spectator<SignUpComponent>;
  let comp: SignUpComponent;
  const createComponent = createComponentFactory({
    component: SignUpComponent,
    shallow: true,
    detectChanges: false,
    mocks: [Router, UserService],
  });

  beforeEach(() => {
    spec = createComponent();
    comp = spec.component;
    spec.setInput({
      subscription: {
        unsubscribe: jest.fn(),
      } as any,
    });
  });

  it('should be created', () => {
    expect(comp).toBeInstanceOf(SignUpComponent);
  });

  it('can create user', () => {
    const service = spec.inject(UserService);
    const router = spec.inject(Router);

    jest.spyOn(service, 'create').mockImplementation((user) => of(user));

    const user = {
      firstName: 'Sojiro',
      lastName: 'DeTenken',
      email: 'sojiro@ashokma.com',
      password: 'secret',
    } as User;

    comp.create(user);

    expect(service.create).toHaveBeenCalledWith(user);
    expect(router.navigate).toHaveBeenCalledWith(['welcome']);
  });
});
