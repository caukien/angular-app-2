import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';
import { CateService } from '../../category/cate.service';
import { Cate } from '../../model/cate';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() itemForEdit: Product | null = null;
  @Output() formClosed = new EventEmitter<void>();
  @Output() productAdded = new EventEmitter<any>();

  product: Product = new Product(0, '', 0, 0, new Date(), 0);
  cateItems: Cate[] = [];

  isEditMode: boolean = false;

  mode: 'add' | 'edit' = 'add';

  constructor(
    private productService: ProductService,
    private cateSevice: CateService
  ) {}

  ngOnInit() {
    this.cateItems = this.cateSevice.getCate();
  }

  ngOnChanges(): void {
    if (this.isOpen && this.itemForEdit != null) {
      this.mode = 'edit';
      this.isEditMode = true;
      this.product = { ...this.itemForEdit };
    } else {
      this.mode = 'add';
      this.resetForm();
    }
  }

  close(): void {
    this.isOpen = false;
    this.formClosed.emit();
  }

  // addProduct(): void {
  //   this.productService.addProduct(this.product);
  //   this.productAdded.emit(true);

  //   this.product = new Product(0, '', 0, 0, new Date(), '');
  // }
  addProduct(): void {
    if (this.mode === 'add') {
      this.productService.addProduct(this.product);
      this.productAdded.emit(true);
      this.product = new Product(0, '', 0, 0, new Date(), 0);
    } else if (this.mode === 'edit') {
      this.saveChange(this.product);
      this.productAdded.emit(true);
    }
  }

  saveChange(itemForEdit: Product): void {
    this.productService.updateProduct(itemForEdit);
  }

  resetForm(): void {
    this.product = new Product(0, '', 0, 0, new Date(), 0);
    this.isEditMode = false;
    this.mode = 'add';
  }
}
