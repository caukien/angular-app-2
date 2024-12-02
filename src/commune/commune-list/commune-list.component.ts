import { Component, OnInit } from '@angular/core';
import { Commune } from '../../model/commune';
import { CommuneService } from '../commune.service';

@Component({
  selector: 'app-commune-list',
  templateUrl: './commune-list.component.html',
  styleUrls: ['./commune-list.component.css'],
})
export class CommuneListComponent implements OnInit {
  items: Commune[] = [];

  constructor(private communeService: CommuneService) {}

  ngOnInit() {
    this.communeService.getCommune().subscribe(
      (response) => {
        this.items = response.items;
      },
      (error) => {
        console.error('Error getting distric data:', error);
      }
    );
  }
}
