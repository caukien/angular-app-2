import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceComponent } from './province.component';
import { ProvinceListComponent } from './province-list/province-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProvinceService } from './province.service';
import { ProvinceFormComponent } from './province-form/province-form.component';
import { DistrictService } from '../district/district.service';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { ProvinceSearchComponent } from './province-search/province-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbPagination,
    ReactiveFormsModule,
  ],
  declarations: [
    ProvinceComponent,
    ProvinceListComponent,
    ProvinceFormComponent,
    ProvinceSearchComponent,
  ],
  exports: [ProvinceComponent],
  providers: [ProvinceService, DistrictService],
})
export class ProvinceModule {}
