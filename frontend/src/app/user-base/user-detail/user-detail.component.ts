import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import User from 'src/app/models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input()
  user!: User;
  
  @Output()
  delete: EventEmitter<User> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onDelete(user: User): void{
    this.delete.emit(user);
  };
  
}
