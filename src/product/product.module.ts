import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { CateService } from '../category/cate.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [ProductComponent],
  declarations: [ProductComponent, ProductlistComponent, ProductFormComponent],
  providers: [ProductService, CateService],
})
export class ProductModule {}
