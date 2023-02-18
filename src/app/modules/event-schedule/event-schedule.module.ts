import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventScheduleComponent } from './event-schedule/event-schedule.component';
import { TranslocoModule } from '@ngneat/transloco';


@NgModule({
  declarations: [
    EventScheduleComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [
    EventScheduleComponent
  ]
})
export class EventScheduleModule {

}
