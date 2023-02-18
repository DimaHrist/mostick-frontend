import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiDataListModule,
  TuiThemeNightModule,
  TuiModeModule,
  TuiPrimitiveTextfieldModule,
  TuiHostedDropdownModule,
  TuiButtonModule,
  TuiSvgModule
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TuiSelectModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoRootModule } from './transloco-root.module';
import { ErrorInterceptor } from './services/error.interceptor';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { EventScheduleModule } from './modules/event-schedule/event-schedule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiSelectModule,
    ReactiveFormsModule,
    TuiDataListModule,
    TuiThemeNightModule,
    TuiPrimitiveTextfieldModule,
    TuiModeModule,
    TranslocoRootModule,
    TuiHostedDropdownModule,
    TuiButtonModule,
    TuiActiveZoneModule,
    TuiSvgModule,
    EventScheduleModule
  ],
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    // tuiLanguageSwitcher(
    //   async (language: TuiLanguageName): Promise<unknown> => {
    //     if (language === 'russian') {
    //       return import('@taiga-ui/i18n/languages/russian')
    //     }
    //     if (language === 'english') {
    //       return import('@taiga-ui/i18n/languages/english')
    //     }
    //     if (language === 'spanish') {
    //       return import('@taiga-ui/i18n/languages/spanish')
    //     } else {
    //       return import('@taiga-ui/i18n/languages/english')
    //     }
    //   }
    // )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
