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
import { SearchFormModule } from '../shared_module/search-form/search-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    SearchFormModule,
  ],
  declarations: [
    DistrictComponent,
    DistrictListComponent,
    DistrictFormComponent,
  ],
  exports: [DistrictComponent],
  providers: [
    DistrictService,
    provideHttpClient(withInterceptors([customInterceptor])),
  ],
})
export class DistrictModule {}
