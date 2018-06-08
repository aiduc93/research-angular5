import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './component/child/child.component';
import { UsersComponent } from './component/users/users.component';
import {FormsModule} from '@angular/forms';
import { PipeComponent } from './component/pipe/pipe.component';
import { FormatDataPipe } from './custom-pipe/format-data.pipe';
import { FilterDataPipe } from './custom-pipe/filter-data.pipe';
import { LifecycleHookComponent } from './component/lifecycle-hook/lifecycle-hook.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UsersComponent,
    PipeComponent,
    FormatDataPipe,
    FilterDataPipe,
    LifecycleHookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
