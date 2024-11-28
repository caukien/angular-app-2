import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { CateService } from '../category/cate.service';

@Injectable()
export class ProductService {
  constructor(private cateservice: CateService) {}
  private products: Product[] = [
    new Product(0, 'aksjdfkasjk', 1, 1, new Date(), 0),
  ];
  private lastId = 1;

  addProduct(product: Product): void {
    this.lastId++;
    product.id = this.lastId;
    this.products.push(product);
  }

  getProduct(): Product[] {
    return this.products.map((product) => {
      const category = this.cateservice.getCateById(product.cateId);
      return {
        ...product,
        cateName: category ? category.CateName : 'Unknown',
      };
    });
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  updateProduct(updateProduct: Product): void {
    const index = this.products.findIndex(
      (product) => product.id == updateProduct.id
    );
    if (index !== -1) {
      this.products[index] = updateProduct;
    }
  }

  deleteProduct(item: Product): void {
    this.products = this.products.filter((product) => product.id !== item.id);
  }

  deleteProductByCateId(cateId: number): void {
    this.products = this.products.filter(
      (product) => product.cateId !== cateId
    );
  }
}
