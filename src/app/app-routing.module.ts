import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up').then((m) => m.SignUpModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'sign-up',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
