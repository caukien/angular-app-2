import { Component, OnInit, ViewChild } from '@angular/core';
import { Commune } from '../../model/commune';
import { CommuneService } from '../commune.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommuneSearchComponent } from '../commune-search/commune-search.component';

@Component({
  selector: 'app-commune-list',
  templateUrl: './commune-list.component.html',
  styleUrls: ['./commune-list.component.css'],
})
export class CommuneListComponent implements OnInit {
  @ViewChild(CommuneSearchComponent) searchComponent!: CommuneSearchComponent;

  items: Commune[] = [];
  isFormOpen = false;
  itemToEdit: Commune | null = null;
  isLoading: boolean = false;

  totalItems = 0;
  pageSize = 10;
  currentPage = 1;

  // onDataSearched(data: any) {
  //   this.items = data;
  // }

  constructor(
    private communeService: CommuneService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  onPageChange(page: number) {
    this.currentPage = page;
    this.searchComponent.onPageChange(page);
  }
  // loadData(): void {
  //   this.isLoading = true;
  //   const skipCount = (this.currentPage - 1) * this.pageSize;

  //   const searchParams = {
  //     filter: this.searchString,
  //     maTinh: this.maTinh,
  //     maHuyen: this.maHuyen,
  //     isActive: this.isActive,
  //     skipCount: skipCount,
  //     maxResultCount: this.pageSize,
  //   };

  //   this.communeService.getCommune(searchParams).subscribe(
  //     (response) => {
  //       this.items = response.items;
  //       this.totalItems = response.totalCount;
  //       this.isLoading = false;
  //     },
  //     (error) => {
  //       console.error('Error loading commune:', error);
  //       this.isLoading = false;
  //     }
  //   );
  // }

  onDataSearched(data: any) {
    this.items = data.items;
    this.totalItems = data.totalItems;
  }

  // onPageChange(page: number) {
  //   this.router.navigate([], {
  //     relativeTo: this.route,
  //     queryParams: {
  //       page: page,
  //       pageSize: this.pageSize,
  //       searchString: this.searchString,
  //       maTinh: this.maTinh,
  //       maHuyen: this.maHuyen,
  //       isActive: this.isActive,
  //     },
  //     queryParamsHandling: 'merge',
  //   });
  // }

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
