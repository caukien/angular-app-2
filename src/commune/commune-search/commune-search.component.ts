import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DistrictService } from '../../district/district.service';
import { ProvinceService } from '../../province/province.service';
import { FormBuilder, Validators } from '@angular/forms';
import { District } from '../../model/district';
import { Province } from '../../model/province';
import { CommuneService } from '../commune.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-commune-search',
  templateUrl: './commune-search.component.html',
  styleUrls: ['./commune-search.component.css'],
})
export class CommuneSearchComponent implements OnInit {
  districtData: District[] = [];
  provinceData: Province[] = [];
  @Output() dataSearched = new EventEmitter<any>();

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;

  constructor(
    private districtService: DistrictService,
    private provinceservice: ProvinceService,
    private communeService: CommuneService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadDistrictData();
    this.loadProvinceData();
    this.loadSearchResults();
  }

  searchForm = this.fb.group({
    filter: [''],
    maTinh: [''],
    tenTinh: [''],
    maHuyen: [''],
    tenHuyen: [''],
    isActive: [null],
    maxResultCount: [10],
  });

  loadSearchResults() {
    const skipCount = (this.currentPage - 1) * this.pageSize;
    const searchParams = {
      ...this.searchForm.value,
      skipCount: skipCount,
      maxResultCount: this.pageSize,
    };

    this.communeService.search(searchParams).subscribe(
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

  loadDistrictData() {
    this.districtService.getDistricts().subscribe(
      (response) => {
        this.districtData = response.items;
      },
      (error) => {
        console.error('Error getting distric data:', error);
      }
    );
  }
  loadProvinceData() {
    this.provinceservice.getProvince().subscribe(
      (response) => {
        this.provinceData = response.items;
      },
      (error) => {
        console.error('Error getting distric data:', error);
      }
    );
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
      maTinh: '',
      maHuyen: '',
      isActive: null,
      maxResultCount: 10,
    });
  }
}
