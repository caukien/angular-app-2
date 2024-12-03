import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '../auth/login-form/login-form.component';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductComponent } from '../product/product.component';
import { CategoryComponent } from '../category/category.component';
import { AccountComponent } from '../account/account.component';
import { ProvinceComponent } from '../province/province.component';
import { DistrictComponent } from '../district/district.component';
import { CommuneComponent } from '../commune/commune.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginFormComponent,
    // canActivate: [authGuard],
  },
  // {
  //   path: '',
  //   loadChildren: import('../layout/layout-routing');
  // },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
      },
      {
        path: 'district',
        component: DistrictComponent,
      },
      {
        path: 'province',
        component: ProvinceComponent,
      },
      {
        path: 'commune',
        component: CommuneComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
