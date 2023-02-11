import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  selectOption(item: string): void {
    this.dropdownOpen = false;
  }
  currentRoute = '/streams';
  constructor(private translocoService: TranslocoService) {
  }

  public setCurrentRoute(route: string): void {
    this.currentRoute = route;
  }

  public changeLanguage(lang: 'ru' | 'en'): void {
    this.translocoService.setActiveLang(lang);
  }

}
