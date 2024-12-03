import { Component, OnInit } from '@angular/core';
import { ProvinceService } from '../province.service';
import { Province } from '../../model/province';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css'],
})
export class ProvinceListComponent implements OnInit {
  provinces: Province[] = [];
  isFormOpen = false;
  itemToEdit: Province | null = null;
  isLoading: boolean = false;

  constructor(private provinceservice: ProvinceService) {}

  ngOnInit() {
    this.loadData();
  }
  loadData(): void {
    this.isLoading = true;
    this.provinceservice.getProvince().subscribe(
      (response) => {
        this.provinces = response.items;
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
      this.provinceservice.getProvince().subscribe(
        (response) => {
          this.provinces = response.items;
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

  chooseItem(item: Province): void {
    this.itemToEdit = { ...item };
    this.isFormOpen = true;
  }

  delete(id: number): void {
    if (confirm('Bạn có muốn xóa?')) {
      this.provinceservice.delete(id).subscribe({
        next: (response) => {
          this.provinceservice.getProvince().subscribe(
            (res) => {
              this.provinces = res.items;
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
