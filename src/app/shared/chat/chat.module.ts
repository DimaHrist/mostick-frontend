import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { TranslocoModule } from '@ngneat/transloco';
import { TuiInputModule, TuiMarkerIconModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule, TuiDataListModule,
  TuiDropdownModule,
  TuiScrollbarModule,
  TuiSvgModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/core';



@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiMarkerIconModule,
    TuiSvgModule,
    TuiScrollbarModule,
    TuiTextAreaModule,
    TuiDropdownModule,
    TuiDataListModule,
    TranslocoModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
