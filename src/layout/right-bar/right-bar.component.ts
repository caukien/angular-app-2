import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css'],
})
export class RightBarComponent implements OnInit {
  @Output() menuItemSelected = new EventEmitter<string>();
  hasLoggined = localStorage.getItem('access_token');
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.hasLoggined == null) {
      this.router.navigateByUrl('/login');
    }
  }

  onItemClick(item: string): void {
    this.menuItemSelected.emit(item);
  }

  onLogoff() {
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/login');
  }
}
