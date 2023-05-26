import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => this.users = users
    );
  };

  onDeleteHandler(user: User) {
    this.userService.deleteUser(user).subscribe();
  }
}
