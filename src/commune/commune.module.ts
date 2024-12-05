import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommuneComponent } from './commune.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommuneService } from './commune.service';
import { CommuneListComponent } from './commune-list/commune-list.component';
import { CommuneFormComponent } from './commune-form/commune-form.component';
import { CommuneSearchComponent } from './commune-search/commune-search.component';
import { DistrictService } from '../district/district.service';
import { ProvinceService } from '../province/province.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule,
  ],
  declarations: [
    CommuneComponent,
    CommuneListComponent,
    CommuneFormComponent,
    CommuneSearchComponent,
  ],
  exports: [CommuneComponent],
  providers: [CommuneService, DistrictService, ProvinceService],
})
export class CommuneModule {}
