import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceComponent } from './province.component';
import { ProvinceListComponent } from './province-list/province-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProvinceService } from './province.service';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [ProvinceComponent, ProvinceListComponent],
  exports: [ProvinceComponent],
  providers: [ProvinceService],
})
export class ProvinceModule {}
