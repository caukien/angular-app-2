import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../district.service';
import { District } from '../../model/district';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css'],
})
export class DistrictListComponent implements OnInit {
  isFormOpen = false;
  itemToEdit: District | null = null;
  districts: District[] = [];
  isLoading: boolean = false;

  constructor(private districtService: DistrictService) {}

  ngOnInit() {
    // this.districtService.getDistricts().subscribe(
    //   (response) => {
    //     this.districts = response.items;
    //   },
    //   (error) => {
    //     console.error('Error getting distric data:', error);
    //   }
    // );
    this.loadData();
  }
  loadData(): void {
    this.isLoading = true;
    this.districtService.getDistricts().subscribe(
      (response) => {
        this.districts = response.items;
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

  isItemAdded(isAdded: boolean) {
    if (isAdded) {
      this.districtService.getDistricts().subscribe(
        (response) => {
          this.districts = response.items;
          this.isFormOpen = false;
        },
        (error) => {
          console.error('Error refreshing districts:', error);
        }
      );
    } else {
      this.isFormOpen = false;
    }
  }

  onFormClosed() {
    this.isFormOpen = false;
  }

  chooseItem(item: District, action: string): void {
    if (action === 'edit') {
      this.itemToEdit = { ...item };
      this.isFormOpen = true;
    }
  }

  delete(id: number): void {
    if (confirm('Bạn có muốn xóa?')) {
      this.districtService.delete(id).subscribe({
        next: (response) => {
          this.districtService.getDistricts().subscribe(
            (res) => {
              this.districts = res.items;
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
