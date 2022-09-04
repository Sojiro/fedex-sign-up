import { NgModule, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { User } from 'src/app/data-access';
import { passwordValidator } from './sign-up-form.validators';
import { CommonModule } from '@angular/common';

export interface SignUpForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

const EMAIL_ADDRESS = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const LETTERS_CASE_INSENSITIVE = /[a-z]/i;
@Component({
  selector: 'fedex-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent {
  signUpForm = new FormGroup<SignUpForm>(
    {
      firstName: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      lastName: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      email: new FormControl<string>('', {
        validators: [Validators.required, Validators.pattern(EMAIL_ADDRESS)],
        nonNullable: true,
      }),
      password: new FormControl<string>('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(LETTERS_CASE_INSENSITIVE),
        ],
        nonNullable: true,
      }),
    },
    {
      validators: passwordValidator,
    }
  );

  @Output()
  submitted = new EventEmitter<User>();

  validateAndSubmit() {
    if (this.signUpForm.valid) {
      this.submitted.emit({ ...this.signUpForm.value } as User);
    }
  }

  get invalidPassword() {
    const password = this.signUpForm.get('password');
    return (
      (password?.touched || password?.dirty) &&
      password.valid &&
      this.signUpForm.errors?.['password']
    );
  }
}

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SignUpFormComponent],
  declarations: [SignUpFormComponent],
  providers: [],
})
export class SignUpFormComponentModule {}
