import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TuiScrollbarComponent } from '@taiga-ui/core';
import { takeUntil } from 'rxjs';
import { WebsocketService } from '../../../services/websocket.service';
import { DestroyService } from '../../../services/destroy.service';
import { AuthService, User } from '../../../services/auth.service';

export interface Message {
  event_type: string,
  payload: {
    chat_id: number,
    created_at: string,
    id: number,
    text: string,
    quantity?: number,
    user: User
  }
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [DestroyService]
})
export class ChatComponent implements AfterViewInit {

  public messages = this.wsService.messages$;
  private token$ = this.authService.token$;

  @ViewChild(TuiScrollbarComponent, {read: ElementRef})
  private readonly scrollBar?: ElementRef<HTMLElement>;

  public comment = new FormControl(null, [Validators.required])

  public scrollBottom(): void {
    setTimeout((() => {
      if (this.scrollBar) {
        const {nativeElement} = this.scrollBar;
        nativeElement.scrollTop = nativeElement.scrollHeight;
      }
    }), 0)
  }

  constructor(
    private readonly wsService: WebsocketService,
    private readonly authService: AuthService,
    private readonly destroy$: DestroyService
  ) {
  }

  public sendMessage(): void {
    if (this.comment.value && this.token$.getValue()) {
      this.wsService.sendMessage(this.comment.value, this.token$.getValue());
      this.comment.setValue(null)
    }
  }

  public deleteMessage(id: number): void {
    console.log('DELETE', 'Message id: ', id)
    this.wsService.deleteMessage(id);
  }

  public hideUsersMessages(): void {
    const userId = this.authService.user$.getValue()
    if (userId) {
      this.wsService.hideUsersMessages(userId);
    }
  }

  public blockUser(authorId: number): void {
    console.log('BLOCK USER')
  }

  public ngAfterViewInit(): void {
    this.scrollBottom();
    this.messages.pipe(takeUntil(this.destroy$))
      .subscribe(() => this.scrollBottom())

  }
}
