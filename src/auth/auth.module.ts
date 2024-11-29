import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AuthComponent, LoginFormComponent],
  exports: [AuthComponent, LoginFormComponent],
  providers: [AuthService],
})
export class AuthModule {}
