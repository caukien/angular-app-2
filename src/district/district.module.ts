import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictComponent } from './district.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DistrictService } from './district.service';
import { DistrictListComponent } from './district-list/district-list.component';
import { DistrictFormComponent } from './district-form/district-form.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgbPaginationModule],
  declarations: [
    DistrictComponent,
    DistrictListComponent,
    DistrictFormComponent,
  ],
  exports: [DistrictComponent],
  providers: [DistrictService],
})
export class DistrictModule {}
