import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from '../services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [UserDetailComponent, UserListComponent],
  exports: [UserDetailComponent, UserListComponent],
  providers: [UserService]
})
export class UserBaseModule { }
