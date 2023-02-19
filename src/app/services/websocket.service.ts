import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Message } from '../shared/chat/chat/chat.component';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private readonly url = 'wss://api.mostick.lutrastickers.com/api/v1/ws/1';

  public messages$ = new BehaviorSubject<Message[]>([]);

  private socket: WebSocket | undefined;

  public connect(): void {
    this.socket = new WebSocket(this.url)
    this.socket.addEventListener('message', ev => {
      const parsedData = JSON.parse(JSON.parse(ev.data))
      const newMessagesArr = ([...this.messages$.getValue(), parsedData])
      this.messages$.next(newMessagesArr)
    })
  }

  public sendMessage(message: string): void {
    const data = JSON.stringify({'text': message, 'type': 'send_message'});
    this.socket?.send(data);
  }

  public deleteMessage(id: number): void {
    const data = JSON.stringify({'message_id': id, 'type': 'delete_message'});
    this.socket?.send(data);
  }
}
