import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DistrictService } from '../../district/district.service';
import { ProvinceService } from '../../province/province.service';
import { FormBuilder, Validators } from '@angular/forms';
import { District } from '../../model/district';
import { Province } from '../../model/province';
import { CommuneService } from '../commune.service';

@Component({
  selector: 'app-commune-search',
  templateUrl: './commune-search.component.html',
  styleUrls: ['./commune-search.component.css'],
})
export class CommuneSearchComponent implements OnInit {
  districtData: District[] = [];
  provinceData: Province[] = [];
  @Output() dataSearched = new EventEmitter<any>();

  constructor(
    private districtService: DistrictService,
    private provinceservice: ProvinceService,
    private communeService: CommuneService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loadDistrictData();
    this.loadProvinceData();
  }

  searchForm = this.fb.group({
    filter: [''],
    maTinh: [''],
    tenTinh: [''],
    maHuyen: [''],
    tenHuyen: [''],
    isActive: [true],
    maxResultCount: [10],
  });

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
    const search = this.searchForm.value;
    this.communeService.search(search).subscribe((res) => {
      this.dataSearched.emit(res.items);
    });
  }
  resetSearch(): void {
    this.resetForm();
    this.communeService.search(this.searchForm.value).subscribe((res) => {
      this.dataSearched.emit(res.items);
    });
  }
  resetForm(): void {
    this.searchForm.reset({
      filter: '',
      maTinh: '',
      tenTinh: '',
      maHuyen: '',
      tenHuyen: '',
      isActive: true,
      maxResultCount: 10,
    });
  }
}
