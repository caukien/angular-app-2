import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommuneComponent } from './commune.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommuneService } from './commune.service';
import { CommuneListComponent } from './commune-list/commune-list.component';
import { CommuneFormComponent } from './commune-form/commune-form.component';
import { DistrictService } from '../district/district.service';
import { ProvinceService } from '../province/province.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchFormModule } from '../shared_module/search-form/search-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    SearchFormModule,
  ],
  declarations: [CommuneComponent, CommuneListComponent, CommuneFormComponent],
  exports: [CommuneComponent],
  providers: [CommuneService, DistrictService, ProvinceService],
})
export class CommuneModule {}
