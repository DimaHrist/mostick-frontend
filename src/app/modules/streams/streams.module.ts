import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from './components/streams/streams.component';
import { StreamsRoutingModule } from './streams-routing.module';



@NgModule({
  declarations: [
    StreamsComponent
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule
  ]
})
export class StreamsModule { }
