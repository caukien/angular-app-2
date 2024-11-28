import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '../layout/layout.module';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, AuthModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
