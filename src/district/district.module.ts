import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictComponent } from './district.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { DistrictService } from './district.service';
import { DistrictListComponent } from './district-list/district-list.component';
import { DistrictFormComponent } from './district-form/district-form.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { customInterceptor } from '../app/custom.interceptor';
import { DistrictSearchComponent } from './district-search/district-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DistrictComponent,
    DistrictListComponent,
    DistrictFormComponent,
    DistrictSearchComponent,
  ],
  exports: [DistrictComponent],
  providers: [
    DistrictService,
    provideHttpClient(withInterceptors([customInterceptor])),
  ],
})
export class DistrictModule {}
