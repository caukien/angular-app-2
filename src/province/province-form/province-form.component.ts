import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Province } from '../../model/province';
import { ProvinceService } from '../province.service';

@Component({
  selector: 'app-province-form',
  templateUrl: './province-form.component.html',
  styleUrls: ['./province-form.component.css'],
})
export class ProvinceFormComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() itemForEdit: Province | null = null;
  @Output() formClosed = new EventEmitter<void>();
  @Output() itemtAdded = new EventEmitter<any>();

  itemInit: Province = new Province();

  isEditMode: boolean = false;

  mode: 'add' | 'edit' = 'add';

  constructor(private provinceService: ProvinceService) {}

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
    this.itemInit = new Province();
    this.isEditMode = false;
    this.mode = 'add';
  }

  addItem(): void {
    if (this.mode === 'add') {
      debugger;
      this.provinceService.createOrUpdate(this.itemInit).subscribe({
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
    }
  }

  saveChange(itemForEdit: Province): void {
    this.provinceService.createOrUpdate(itemForEdit).subscribe({
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
