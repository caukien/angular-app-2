import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cate } from '../../model/cate';
import { CateService } from '../cate.service';

@Component({
  selector: 'app-cate-form',
  templateUrl: './cate-form.component.html',
  styleUrls: ['./cate-form.component.css'],
})
export class CateFormComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() itemForEdit: Cate | null = null;
  @Output() formClosed = new EventEmitter<void>();
  @Output() productAdded = new EventEmitter<any>();

  product: Cate = new Cate(0, '');

  isEditMode: boolean = false;

  mode: 'add' | 'edit' = 'add';

  constructor(private cateService: CateService) {}

  ngOnInit() {}

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

  addProduct(): void {
    if (this.mode === 'add') {
      this.cateService.addCate(this.product);
      this.productAdded.emit(true);
      this.product = new Cate(0, '');
    } else if (this.mode === 'edit') {
      this.saveChange(this.product);
      this.productAdded.emit(true);
    }
  }

  saveChange(itemForEdit: Cate): void {
    this.cateService.updateCate(itemForEdit);
  }

  resetForm(): void {
    this.product = new Cate(0, '');
    this.isEditMode = false;
    this.mode = 'add';
  }
}
