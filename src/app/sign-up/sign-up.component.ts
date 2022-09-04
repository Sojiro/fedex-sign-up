import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataAccessModule, User, UserService } from '../data-access';
import { SignUpFormComponentModule } from './ui-components/sign-up-form/sign-up-form.component';

@Component({
  selector: 'fedex-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  constructor(private readonly userService: UserService) {}

  create(user: User) {
    console.log('🚀 | SignUpComponent | validateAndSubmit | user', user);
    this.userService.create(user).subscribe(console.log);
  }
}

@NgModule({
  imports: [
    DataAccessModule,
    SignUpFormComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignUpComponent,
      },
    ]),
  ],
  exports: [SignUpComponent],
  declarations: [SignUpComponent],
  providers: [],
})
export class SignUpModule {}
