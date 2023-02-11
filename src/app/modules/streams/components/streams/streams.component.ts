import { Component } from '@angular/core';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent {

  public streamsList = [
    {
      title: 'Stream 1',
      link: '',
    },
    {
      title: 'Stream 2',
      link: '',
    },
    {
      title: 'Stream 3',
      link: '',
    }
  ]

}
