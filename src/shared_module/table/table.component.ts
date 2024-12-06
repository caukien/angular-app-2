import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() columnNames: string[] = [];
  @Input() data: any[] = [];
  @Input() actions: string[] = [];
  @Input() isLoading: boolean = false;

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();
  @Output() pageChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onEdit(item: any) {
    this.edit.emit(item);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }
  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }
}
