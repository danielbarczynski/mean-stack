import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import User from 'src/app/models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input()
  user!: User;

  @Output()
  create: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  addUser(user: User): void {
    this.create.emit(user);
  }
}
