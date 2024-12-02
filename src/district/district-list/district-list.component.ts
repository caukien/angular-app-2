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

  constructor(private districtService: DistrictService) {}

  ngOnInit() {
    this.districtService.getDistricts().subscribe(
      (response) => {
        this.districts = response.items;
      },
      (error) => {
        console.error('Error getting distric data:', error);
      }
    );
  }

  openForm(): void {
    this.isFormOpen = true;
    this.itemToEdit = null;
  }

  isItemAdded() {
    this.isFormOpen = !this.isFormOpen;
  }

  onFormClosed() {
    this.isFormOpen = false;
  }
}
