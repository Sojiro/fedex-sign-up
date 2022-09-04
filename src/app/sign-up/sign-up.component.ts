import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User, UserService } from '../data-access';
import { SignUpFormComponentModule } from './ui-components/sign-up-form/sign-up-form.component';

@Component({
  selector: 'fedex-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  create(user: User) {
    this.userService
      .create(user)
      .subscribe(() => this.router.navigate(['welcome']));
  }
}

@NgModule({
  imports: [
    SignUpFormComponentModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SignUpComponent,
      },
    ]),
  ],
  exports: [SignUpComponent],
  declarations: [SignUpComponent],
  providers: [],
})
export class SignUpModule {}
