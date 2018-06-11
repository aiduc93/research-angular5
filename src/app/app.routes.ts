import {  Routes } from '@angular/router';

import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
export const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/index',
      pathMatch: 'full'
    },
    {
      path: 'index',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: '**',
      component: NotfoundComponent
    }
  ]