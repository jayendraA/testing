import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {LoginService} from './service/login.service';
import {DataService} from '../dashboard/service/data.service';
import { LogoutComponent } from './components/logout/logout.component';
@NgModule({
  declarations: [ LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
     FormsModule,
     ReactiveFormsModule
  ],
  providers:[LoginService,DataService]
})
export class AuthModule { }
