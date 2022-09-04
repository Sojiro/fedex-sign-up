import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up').then((m) => m.SignUpModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome').then((m) => m.WelcomeComponentModule),
  },
  {
    path: '**',
    redirectTo: 'sign-up',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
