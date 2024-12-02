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

  itemInit: District = new District();

  isEditMode: boolean = false;

  mode: 'add' | 'edit' = 'add';

  constructor(private districtService: DistrictService) {}

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.isOpen && this.itemForEdit != null) {
      this.mode = 'edit';
      this.isEditMode = true;
      this.itemInit = { ...this.itemForEdit };
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
    this.itemInit = new District();
    this.isEditMode = false;
    this.mode = 'add';
  }

  addItem(): void {
    if (this.mode === 'add') {
      this.districtService.createOrUpdate(this.itemInit).subscribe({
        next: (response) => {
          this.itemtAdded.emit(true);
          this.resetForm();
        },
        error: (error) => {
          console.error('Request failed:', error);
        },
      });
    } else if (this.mode === 'edit') {
      this.saveChange(this.itemInit);
      this.itemtAdded.emit(true);
    }
  }

  saveChange(itemForEdit: District): void {
    // this.cateService.updateCate(itemForEdit);
  }
}
