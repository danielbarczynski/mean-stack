import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserBaseModule } from './user-base/user-base.module';
import { UserListComponent } from './user-base/user-list/user-list.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
