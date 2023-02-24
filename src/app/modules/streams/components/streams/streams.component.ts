import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../../../services/websocket.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  constructor(
    public wsService: WebsocketService
  ) {
  }

  public ngOnInit(): void {
    this.wsService.connect();
  }

}
