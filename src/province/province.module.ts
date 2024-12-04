import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceComponent } from './province.component';
import { ProvinceListComponent } from './province-list/province-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProvinceService } from './province.service';
import { ProvinceFormComponent } from './province-form/province-form.component';
import { DistrictService } from '../district/district.service';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [
    ProvinceComponent,
    ProvinceListComponent,
    ProvinceFormComponent,
  ],
  exports: [ProvinceComponent],
  providers: [ProvinceService, DistrictService],
})
export class ProvinceModule {}
