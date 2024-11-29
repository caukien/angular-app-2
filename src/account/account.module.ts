import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { FormsModule } from '@angular/forms';
import { AccountService } from './account.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [AccountComponent],
  exports: [AccountComponent],
  providers: [AccountService],
})
export class AccountModule {}
