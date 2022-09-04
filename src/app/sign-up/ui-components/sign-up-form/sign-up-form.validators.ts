import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const firstName = control.get('firstName');
  const lastName = control.get('lastName');

  if (!firstName || !lastName) return null;

  const password = String(control.get('password')?.value).toLocaleLowerCase();

  const containsFirstName = password.includes(
    String(firstName.value).toLocaleLowerCase()
  );
  const containsLastName = password.includes(
    String(lastName.value).toLocaleLowerCase()
  );
  return containsFirstName || containsLastName ? { password: true } : null;
};
