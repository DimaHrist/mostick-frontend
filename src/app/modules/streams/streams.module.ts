import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from './components/streams/streams.component';
import { StreamsRoutingModule } from './streams-routing.module';
import { TuiButtonModule, TuiScrollbarModule, TuiThemeNightModule } from '@taiga-ui/core';
import { TuiIslandModule, TuiTabsModule } from '@taiga-ui/kit';
import { ChatModule } from '../../shared/chat/chat.module';



@NgModule({
  declarations: [
    StreamsComponent
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule,
    TuiThemeNightModule,
    TuiIslandModule,
    TuiTabsModule,
    TuiScrollbarModule,
    TuiButtonModule,
    ChatModule
  ]
})
export class StreamsModule { }
