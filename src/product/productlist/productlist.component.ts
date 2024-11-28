import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  items: Product[] = [];

  isFormOpen = false;
  productToEdit: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.items = this.productService.getProduct();
  }

  openForm(): void {
    this.isFormOpen = true;
    this.productToEdit = null;
  }

  isProductAdded() {
    this.isFormOpen = !this.isFormOpen;
  }

  onFormClosed() {
    this.isFormOpen = false;
  }

  chooseItem(item: Product, action: string): void {
    if (action === 'edit') {
      this.productToEdit = { ...item };
      this.isFormOpen = true;
    } else if (action === 'delete') {
      this.productService.deleteProduct(item);
      this.items = this.productService.getProduct();
    }
  }
}
