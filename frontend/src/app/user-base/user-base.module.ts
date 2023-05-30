import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from '../services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-list/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UserDetailComponent, UserListComponent, UserFormComponent],
  exports: [UserDetailComponent, UserListComponent, UserFormComponent],
  providers: [UserService]
})
export class UserBaseModule { }
