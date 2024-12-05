import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DistrictService } from '../../district/district.service';
import { FormBuilder } from '@angular/forms';
import { ProvinceService } from '../province.service';
import { District } from '../../model/district';

@Component({
  selector: 'app-province-search',
  templateUrl: './province-search.component.html',
  styleUrls: ['./province-search.component.css'],
})
export class ProvinceSearchComponent implements OnInit {
  @Output() dataSearched = new EventEmitter<any>();
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  districtData: District[] = [];

  searchForm = this.fb.group({
    filter: [''],
    maTinh: [''],
    isActive: [null],
    maxResultCount: [10],
  });

  constructor(
    private districtService: DistrictService,
    private provinceService: ProvinceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loadDistrictData();
    this.loadSearchResults();
  }
  loadDistrictData() {
    this.districtService.getDistricts().subscribe((res) => {
      this.districtData = res.items;
    });
  }
  loadSearchResults() {
    const skipCount = (this.currentPage - 1) * this.pageSize;
    const searchParams = {
      ...this.searchForm.value,
      skipCount: skipCount,
      maxResultCount: this.pageSize,
    };

    this.provinceService.search(searchParams).subscribe(
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
      maTinh: '',
      maxResultCount: 10,
    });
  }
}
