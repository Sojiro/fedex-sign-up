import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { first } from 'rxjs';

export const passwordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const firstName = control.get('firstName');
  const lastName = control.get('lastName');

  if (!firstName || !lastName) return null;

  const password = String(control.get('password')?.value);

  return password.includes(firstName.value) || password.includes(lastName.value)
    ? { password: true }
    : null;
};
