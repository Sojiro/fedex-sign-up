import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { passwordValidator } from './sign-up-form.validators';

describe(passwordValidator.name, () => {
  it('valid when there are no names', () => {
    expect(passwordValidator(<any>new Map())).toBeNull();
  });

  describe('invalid', () => {
    it('if password contains first name', () => {
      const control = new Map();
      control.set('firstName', { value: 'Sojiro' });
      control.set('lastName', { value: 'DeTenken' });
      control.set('password', { value: 'sojiro1123' });
      const validationErrors = passwordValidator(<any>control);
      expect(validationErrors).not.toBeNull();
      expect(validationErrors && validationErrors['password']).toBeTruthy();
    });

    it('if password contains last name', () => {
      const control = new Map();
      control.set('firstName', { value: 'Sojiro' });
      control.set('lastName', { value: 'DeTenken' });
      control.set('password', { value: 'detenken1123' });
      const validationErrors = passwordValidator(<any>control);
      expect(validationErrors).not.toBeNull();
      expect(validationErrors && validationErrors['password']).toBeTruthy();
    });
  });
});
