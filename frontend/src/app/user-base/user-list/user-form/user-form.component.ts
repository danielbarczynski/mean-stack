import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import User from 'src/app/models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  addUserForm!: FormGroup;

  @Output()
  create: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.addUserForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl('')
    })
  }
  
  addUser(): void {
    this.create.emit(this.addUserForm.value);
  }
}
