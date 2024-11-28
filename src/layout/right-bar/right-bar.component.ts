import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css'],
})
export class RightBarComponent implements OnInit {
  @Output() menuItemSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onItemClick(item: string): void {
    this.menuItemSelected.emit(item);
  }
}
