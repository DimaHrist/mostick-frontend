import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/app/modules/login/login.module').then((cm) => cm.LoginModule)
  },
  {
    path: 'streams',
    loadChildren: () => import('src/app/modules/streams/streams.module').then((cm) => cm.StreamsModule)
  },
  {
    path: 'events',
    loadChildren: () => import('src/app/modules/events/events.module').then((cm) => cm.EventsModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('src/app/modules/gallery/gallery.module').then((cm) => cm.GalleryModule)
  },
  {
    path: 'about',
    loadChildren: () => import('src/app/modules/about/about.module').then((cm) => cm.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
