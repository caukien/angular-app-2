import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '../auth/login-form/login-form.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    // children: [
    //   {
    //     path:'dashboard',
    //     component:DashboardComponent
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
