import { Component, OnInit } from '@angular/core';
import { Commune } from '../../model/commune';
import { CommuneService } from '../commune.service';

@Component({
  selector: 'app-commune-list',
  templateUrl: './commune-list.component.html',
  styleUrls: ['./commune-list.component.css'],
})
export class CommuneListComponent implements OnInit {
  items: Commune[] = [];
  isFormOpen = false;
  itemToEdit: Commune | null = null;
  isLoading: boolean = false;

  constructor(private communeService: CommuneService) {}

  ngOnInit() {
    this.loadData();
  }
  loadData(): void {
    this.isLoading = true;
    this.communeService.getCommune().subscribe(
      (response) => {
        this.items = response.items;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  openForm(): void {
    this.isFormOpen = true;
    this.itemToEdit = null;
  }
  onFormClosed() {
    this.isFormOpen = false;
  }

  isItemAdded(isAdded: boolean) {
    if (isAdded) {
      this.communeService.getCommune().subscribe(
        (response) => {
          this.items = response.items;
          this.isFormOpen = false;
        },
        (error) => {
          console.error('Error refreshing provinces:', error);
        }
      );
    } else {
      this.isFormOpen = false;
    }
  }
  chooseItem(item: Commune): void {
    this.itemToEdit = { ...item };
    this.isFormOpen = true;
  }

  delete(id: number): void {
    if (confirm('Bạn có muốn xóa?')) {
      this.communeService.delete(id).subscribe({
        next: (response) => {
          this.communeService.getCommune().subscribe(
            (res) => {
              this.items = res.items;
            },
            (error) => {
              console.error('Error refreshing district list:', error);
            }
          );
        },
        error: (error) => {
          console.error('Error deleting district:', error);
        },
      });
    }
  }
}
