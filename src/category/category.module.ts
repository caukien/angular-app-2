import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CateFormComponent } from './cate-form/cate-form.component';
import { FormsModule } from '@angular/forms';
import { CatelistComponent } from './catelist/catelist.component';
import { ProductService } from '../product/product.service';
import { CateService } from './cate.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CategoryComponent, CateFormComponent, CatelistComponent],
  exports: [CategoryComponent],
  providers: [ProductService, CateService],
})
export class CategoryModule {}
