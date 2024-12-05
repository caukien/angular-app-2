import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { District } from '../../model/district';
import { DistrictService } from '../district.service';
import { FormBuilder, Validators } from '@angular/forms';

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

  districtForm = this.fb.group({
    maTinh: ['', [Validators.required]],
    tenTinh: ['', [Validators.required]],
    cap: ['', [Validators.required]],
    isActive: [true, [Validators.required]],
    id: [0],
  });

  constructor(
    private districtService: DistrictService,
    private fb: FormBuilder
  ) {
    this.districtForm;
  }

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.isOpen && this.itemForEdit != null) {
      this.mode = 'edit';
      this.isEditMode = true;
      this.districtForm.patchValue({
        maTinh: this.itemForEdit.maTinh,
        tenTinh: this.itemForEdit.tenTinh,
        cap: this.itemForEdit.cap,
        isActive: this.itemForEdit.isActive,
        id: this.itemForEdit.id,
      });
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
    this.districtForm.reset();
    this.isEditMode = false;
    this.mode = 'add';
  }

  addItem(): void {
    const data: any = this.districtForm.value;
    if (this.districtForm.invalid) {
      return;
    }
    data.id = 0;

    if (this.mode === 'add') {
      this.districtService.createOrUpdate(data).subscribe({
        next: (response) => {
          this.itemtAdded.emit(true);
          this.resetForm();
        },
        error: (error) => {
          console.error('Request failed:', error);
        },
      });
    } else if (this.mode === 'edit') {
      this.saveChange(data);
    }
  }

  saveChange(itemForEdit: District): void {
    this.districtService.createOrUpdate(itemForEdit).subscribe({
      next: (response) => {
        this.itemtAdded.emit(true);
        this.resetForm();
      },
      error: (error) => {
        console.error('Request failed:', error);
      },
    });
  }
}
