import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthComponent, LoginFormComponent],
  exports: [AuthComponent],
})
export class AuthModule {}
