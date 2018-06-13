import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChildComponent } from './component/child/child.component';
import { UsersComponent } from './component/users/users.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './component/pipe/pipe.component';
import { FormatDataPipe } from './custom-pipe/format-data.pipe';
import { FilterDataPipe } from './custom-pipe/filter-data.pipe';
import { LifecycleHookComponent } from './component/lifecycle-hook/lifecycle-hook.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';

//Services
import { LoggingService } from './services/logging.service';
import { NgContentComponent } from './component/ng-content/ng-content.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { appRoutes } from "./app.routes";
import { ProductComponent } from './component/product/product.component';
import { EditproductComponent } from './component/editproduct/editproduct.component';
import { TodoComponent } from './component/todo/todo.component';
import { ArticleComponent } from './component/article/article.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UsersComponent,
    PipeComponent,
    FormatDataPipe,
    FilterDataPipe,
    LifecycleHookComponent,
    FirstComponent,
    SecondComponent,
    NgContentComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotfoundComponent,
    ProductComponent,
    EditproductComponent,
    TodoComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoggingService
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
