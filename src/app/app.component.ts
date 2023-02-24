import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { EventScheduleComponent } from './modules/event-schedule/event-schedule/event-schedule.component';
import { TuiDialogService } from '@taiga-ui/core';
import { DestroyService } from './services/destroy.service';
import { takeUntil } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class AppComponent implements OnInit {
  dropdownOpen = false;
  public menuItems = [
    {
      title: 'navigation.streams',
      link: '/streams'
    },
    {
      title: 'navigation.events',
      link: '/events'
    },
    {
      title: 'navigation.gallery',
      link: '/gallery'
    },
    {
      title: 'navigation.about',
      link: '/about'
    },
  ]

  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(EventScheduleComponent, this.injector), {});

  constructor(
    private readonly destroy$: DestroyService,
    private readonly authService: AuthService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) {
  }

  showDialog(): void {
    this.dialog.pipe(takeUntil(this.destroy$)).subscribe();
  }

  selectOption(item: string): void {
    this.dropdownOpen = false;
  }

  currentRoute = '/streams';

  public setCurrentRoute(route: string): void {
    this.currentRoute = route;
  }

  public auth(): void {
    this.authService.auth().pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.authService.token$.next(result.token)
        }
        if (result.user_id || true) {
          this.authService.getUser().pipe(takeUntil(this.destroy$))
            .subscribe((user) => {
              this.authService.user$.next(user)
            })
        }
      })
  }

  public lutraAuth(): void {
    this.authService.lutraAuth()
  }

  public ngOnInit(): void {
    this.auth();
  }

}
