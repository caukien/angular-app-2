import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { District } from '../../model/district';
import { DistrictService } from '../district.service';

@Component({
  selector: 'app-district-form',
  templateUrl: './district-form.component.html',
  styleUrls: ['./district-form.component.css'],
})
export class DistrictFormComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() itemForEdit: District | null = null;
  @Output() formClosed = new EventEmitter<void>();
  @Output() itemtAdded = new EventEmitter<any>();

  product: District = new District();

  isEditMode: boolean = false;

  mode: 'add' | 'edit' = 'add';

  constructor(private districtService: DistrictService) {}

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

  resetForm(): void {
    this.product = new District();
    this.isEditMode = false;
    this.mode = 'add';
  }

  addProduct(): void {
    // if (this.mode === 'add') {
    //   this.cateService.addCate(this.product);
    //   this.productAdded.emit(true);
    //   this.product = new Cate(0, '');
    // } else if (this.mode === 'edit') {
    //   this.saveChange(this.product);
    //   this.productAdded.emit(true);
    // }
  }

  saveChange(itemForEdit: District): void {
    // this.cateService.updateCate(itemForEdit);
  }
}
