import { FormGroup } from '@angular/forms';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { User } from 'src/app/data-access';
import {
  SignUpFormComponent,
  SignUpFormComponentModule,
} from './sign-up-form.component';

describe(SignUpFormComponent.name, () => {
  let spec: Spectator<SignUpFormComponent>;
  let comp: SignUpFormComponent;

  const createComponent = createComponentFactory({
    component: SignUpFormComponent,
    shallow: true,
    detectChanges: false,
    imports: [SignUpFormComponentModule],
  });

  beforeEach(() => {
    spec = createComponent();
    comp = spec.component;
  });

  it('should be created with sign up form', () => {
    expect(comp).toBeInstanceOf(SignUpFormComponent);
    expect(comp.signUpForm).toBeInstanceOf(FormGroup);
  });

  it('should validate required fields', () => {
    spec.detectChanges();

    spec.click('button');

    ['firstName', 'lastName', 'email', 'password'].forEach((f) =>
      expect(spec.query(`#${f}`)?.classList.contains('ng-invalid')).toBeTruthy()
    );
  });

  it('should submit valid form', () => {
    let submittedUser: User;
    spec.output<User>('submitted').subscribe((user) => (submittedUser = user));

    const firstName = 'Sojiro';
    const lastName = 'DeTenken';
    const email = 'sojiro@ashokma.com';
    const password = 'secret';

    spec.typeInElement(firstName, '#firstName');
    spec.typeInElement(lastName, '#lastName');
    spec.typeInElement(email, '#email');
    spec.typeInElement(password, '#password');

    spec.click('button');

    expect(comp.signUpForm.value).toBePartial({
      lastName,
      email,
      password,
    });
  });
});
