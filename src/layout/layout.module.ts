import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ProductModule } from '../product/product.module';
import { CategoryModule } from '../category/category.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { AccountModule } from '../account/account.module';
import { DistrictModule } from '../district/district.module';
import { ProvinceModule } from '../province/province.module';
import { CommuneModule } from '../commune/commune.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    ProductModule,
    CategoryModule,
    AppRoutingModule,
    AccountModule,
    DistrictModule,
    ProvinceModule,
    CommuneModule,
  ],
  declarations: [
    LayoutComponent,
    TopNavComponent,
    RightBarComponent,
    FooterComponent,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
