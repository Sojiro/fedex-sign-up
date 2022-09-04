import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  Spectator,
  createComponentFactory,
  byText,
  byTextContent,
} from '@ngneat/spectator/jest';
import { Observable, of } from 'rxjs';
import { User, UserService } from '../data-access';

import { WelcomeComponent } from './welcome.component';

describe(WelcomeComponent.name, () => {
  let spec: Spectator<WelcomeComponent>;
  let comp: WelcomeComponent;

  const createComponent = createComponentFactory({
    component: WelcomeComponent,
    shallow: true,
    detectChanges: false,
    mocks: [UserService],
  });

  beforeEach(() => {
    spec = createComponent();
    comp = spec.component;
  });

  it('should be created', () => {
    expect(comp).toBeInstanceOf(WelcomeComponent);
  });

  it('should welcome newly created user', () => {
    const user = {
      _id: '1234',
      firstName: 'Sojiro',
      email: 'sojiro@ashokma.com',
    } as User;

    spec.setInput({
      newUser: of(user),
    });

    expect(spec.query('.welcome-banner')).toBeVisible();
    expect(spec.query('h1')).toContainText(`Welcome ${user.firstName}`);
    expect(spec.query('.id')).toContainText(`${user._id}`);
    expect(spec.query('.confirmation-banner')).toContainText(`${user.email}`);
  });
});
