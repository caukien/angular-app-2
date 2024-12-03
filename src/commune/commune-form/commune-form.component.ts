import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Commune } from '../../model/commune';
import { CommuneService } from '../commune.service';

@Component({
  selector: 'app-commune-form',
  templateUrl: './commune-form.component.html',
  styleUrls: ['./commune-form.component.css'],
})
export class CommuneFormComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() itemForEdit: Commune | null = null;
  @Output() formClosed = new EventEmitter<void>();
  @Output() itemtAdded = new EventEmitter<any>();

  itemInit: Commune = new Commune();

  isEditMode: boolean = false;

  mode: 'add' | 'edit' = 'add';

  constructor(private communeService: CommuneService) {}

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
    this.itemInit = new Commune();
    this.isEditMode = false;
    this.mode = 'add';
  }

  addItem(): void {
    if (this.mode === 'add') {
      this.communeService.createOrUpdate(this.itemInit).subscribe({
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

  saveChange(itemForEdit: Commune): void {
    this.communeService.createOrUpdate(itemForEdit).subscribe({
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
