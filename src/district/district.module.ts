import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictComponent } from './district.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DistrictService } from './district.service';
import { DistrictListComponent } from './district-list/district-list.component';
import { DistrictFormComponent } from './district-form/district-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [
    DistrictComponent,
    DistrictListComponent,
    DistrictFormComponent,
  ],
  exports: [DistrictComponent],
  providers: [DistrictService],
})
export class DistrictModule {}
