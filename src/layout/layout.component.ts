import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  activeItem: string = '';

  constructor() {}

  ngOnInit() {}
  onMenuItemSelected(item: string): void {
    this.activeItem = item;
  }
}
