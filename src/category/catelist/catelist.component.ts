import { Component, OnInit } from '@angular/core';
import { Cate } from '../../model/cate';
import { CateService } from '../cate.service';

@Component({
  selector: 'app-catelist',
  templateUrl: './catelist.component.html',
  styleUrls: ['./catelist.component.css'],
})
export class CatelistComponent implements OnInit {
  items: Cate[] = [];

  isFormOpen = false;
  productToEdit: Cate | null = null;
  constructor(private cateService: CateService) {}

  ngOnInit() {
    this.items = this.cateService.getCate();
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

  chooseItem(item: Cate, action: string): void {
    if (action === 'edit') {
      this.productToEdit = { ...item };
      this.isFormOpen = true;
    } else if (action === 'delete') {
      this.cateService.deleteCate(item);
      this.items = this.cateService.getCate();
    }
  }
}
