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

@NgModule({
  imports: [
    CommonModule,
    ProductModule,
    CategoryModule,
    AppRoutingModule,
    AccountModule,
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
