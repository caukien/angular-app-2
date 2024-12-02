import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommuneComponent } from './commune.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommuneService } from './commune.service';
import { CommuneListComponent } from './commune-list/commune-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [CommuneComponent, CommuneListComponent],
  exports: [CommuneComponent],
  providers: [CommuneService],
})
export class CommuneModule {}
