import { Component, OnInit } from '@angular/core';
import { ProvinceService } from '../province.service';
import { Province } from '../../model/Province';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css'],
})
export class ProvinceListComponent implements OnInit {
  provinces: Province[] = [];

  constructor(private provinceservice: ProvinceService) {}

  ngOnInit() {
    this.provinceservice.getProvince().subscribe(
      (response) => {
        this.provinces = response.items;
      },
      (error) => {
        console.error('Error getting distric data:', error);
      }
    );
  }
}
