import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Message } from '../shared/chat/chat/chat.component';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private readonly url = 'wss://api.mostick.lutrastickers.com/api/v1/mostick/ws/3';

  public messages$ = new BehaviorSubject<Message[]>([]);

  public onlineCounter = new BehaviorSubject<number>(0);

  private socket: WebSocket | undefined;

  public connect(): void {
    this.socket = new WebSocket(this.url)
    this.socket.addEventListener('message', ev => {
      const parsedData: Message = JSON.parse(JSON.parse(ev.data))
      if (parsedData.event_type === 'old_message' || parsedData.event_type === 'new_message') {
        const newMessagesArr = ([...this.messages$.getValue(), parsedData])
        this.messages$.next(newMessagesArr)
      }
      if (parsedData.event_type === 'clients_quantity_changed' && parsedData.payload.quantity) {
        this.onlineCounter.next(parsedData.payload.quantity);
      }
    })
  }

  public sendMessage(message: string, token: string): void {
    const data = JSON.stringify({'text': message, 'type': 'send_message', 'token': token});
    this.socket?.send(data);
  }

  public deleteMessage(id: number): void {
    const data = JSON.stringify({'message_id': id, 'type': 'delete_message'});
    this.socket?.send(data);
  }

  public hideUsersMessages(userId: number): void {
    const data = JSON.stringify({'user_id': userId, 'type': 'hide_messages'});
    this.socket?.send(data);
  }
}
