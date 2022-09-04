import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../data-access';

@Component({
  selector: 'fedex-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {
  newUser = this.userService.newlyCreated();
  constructor(private readonly userService: UserService) {}
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: WelcomeComponent,
      },
    ]),
  ],
  exports: [],
  declarations: [WelcomeComponent],
  providers: [],
})
export class WelcomeComponentModule {}
