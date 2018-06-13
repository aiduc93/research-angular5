import { Routes } from '@angular/router';

import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { EditproductComponent } from './component/editproduct/editproduct.component';
import { TodoComponent } from './component/todo/todo.component';
import { ArticleComponent } from './component/article/article.component';

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
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'product',
    children: [
      {
        path: '',
        component: ProductComponent
      },

      {
        path: ':id',
        component: EditproductComponent
      },
    ]
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