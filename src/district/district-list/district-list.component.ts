import { Component, OnInit, ViewChild } from '@angular/core';
import { DistrictService } from '../district.service';
import { District } from '../../model/district';
import { DistrictSearchComponent } from '../district-search/district-search.component';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css'],
})
export class DistrictListComponent implements OnInit {
  @ViewChild(DistrictSearchComponent) searchComponent!: DistrictSearchComponent;
  isFormOpen = false;
  itemToEdit: District | null = null;
  districts: District[] = [];
  isLoading: boolean = false;

  totalItems: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private districtService: DistrictService) {}

  ngOnInit() {}

  onDataSearched(data: any) {
    this.districts = data.items;
    this.totalItems = data.totalItems;
  }
  // loadData(): void {
  //   this.isLoading = true;
  //   const skipCount = (this.currentPage - 1) * this.pageSize;
  //   this.districtService.getDistricts(skipCount, this.pageSize).subscribe(
  //     (response) => {
  //       this.districts = response.items;
  //       this.totalItems=response.totalCount;
  //       this.isLoading = false;
  //     },
  //     (error) => {
  //       this.isLoading = false;
  //     }
  //   );
  // }

  onPageChange(page: number) {
    this.currentPage = page;
    this.searchComponent.onPageChange(page);
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
