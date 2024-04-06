import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = ["User1"]
  user1="first user"

  
  onAdd(){
    this.users.push(this.user1)
  }

}

