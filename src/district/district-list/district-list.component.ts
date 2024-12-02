import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../district.service';
import { District } from '../../model/district';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css'],
})
export class DistrictListComponent implements OnInit {
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
}
