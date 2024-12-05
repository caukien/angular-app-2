import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DistrictService } from '../district.service';

@Component({
  selector: 'app-district-search',
  templateUrl: './district-search.component.html',
  styleUrls: ['./district-search.component.css'],
})
export class DistrictSearchComponent implements OnInit {
  @Output() dataSearched = new EventEmitter<any>();

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;

  searchForm = this.fb.group({
    filter: [''],
    isActive: [null],
    maxResultCount: [10],
  });

  constructor(
    private districtService: DistrictService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loadSearchResults();
  }

  loadSearchResults() {
    const skipCount = (this.currentPage - 1) * this.pageSize;
    const searchParams = {
      ...this.searchForm.value,
      skipCount: skipCount,
      maxResultCount: this.pageSize,
    };

    this.districtService.search(searchParams).subscribe(
      (response) => {
        this.totalItems = response.totalCount;
        this.dataSearched.emit({
          items: response.items,
          totalItems: response.totalCount,
        });
      },
      (error) => {
        console.error('Error searching communes:', error);
      }
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadSearchResults();
  }

  onSearch() {
    this.currentPage = 1;
    this.loadSearchResults();
  }
  resetSearch(): void {
    this.resetForm();
    this.currentPage = 1;
    this.loadSearchResults();
  }

  resetForm(): void {
    this.searchForm.reset({
      filter: '',
      isActive: null,
      maxResultCount: 10,
    });
  }
}
