import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'mostick-frontend';

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
