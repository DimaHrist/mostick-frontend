import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TuiScrollbarComponent } from '@taiga-ui/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewInit {

  public messages = new BehaviorSubject([
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
    {
      author: 'admin',
      message: 'ban'
    },
    {
      author: 'user',
      message: 'No, thanks!'
    },
  ])

  @ViewChild(TuiScrollbarComponent, {read: ElementRef})
  private readonly scrollBar?: ElementRef<HTMLElement>;

  public comment = new FormControl('', [Validators.required])

  public scrollBottom(): void {
    setTimeout((() => {
      if (this.scrollBar) {
        console.log('test')
        const {nativeElement} = this.scrollBar;
        nativeElement.scrollTop = nativeElement.scrollHeight;
      }
    }), 0)
  }

  public ngAfterViewInit(): void {
    this.scrollBottom();
    setTimeout((() => {
      const newArr = this.messages.getValue()
      newArr.push({
        author: 'JEPA',
        message: 'No, thanks!'
      })
      this.messages.next(newArr)
      this.scrollBottom()
    }), 2000)
  }
}
