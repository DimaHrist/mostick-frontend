import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { TuiInputModule, TuiInputPasswordModule, TuiIslandModule } from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiLinkModule,
  TuiRootModule,
  TuiTextfieldControllerModule,
  TuiThemeNightModule
} from '@taiga-ui/core';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TuiIslandModule,
    TuiThemeNightModule,
    TuiRootModule,
    TuiButtonModule,
    TranslocoModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    TuiLinkModule
  ]
})
export class LoginModule { }
