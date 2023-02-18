import { ChangeDetectionStrategy, Component, Inject, Injector } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { EventScheduleComponent } from './modules/event-schedule/event-schedule/event-schedule.component';
import { TuiDialogService } from '@taiga-ui/core';
import { DestroyService } from './services/destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class AppComponent {
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
    new PolymorpheusComponent(EventScheduleComponent, this.injector),{});

  constructor(
    private translocoService: TranslocoService,
    private readonly destroy$: DestroyService,
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

  public changeLanguage(lang: 'ru' | 'en'): void {
    this.translocoService.setActiveLang(lang);
  }

}
