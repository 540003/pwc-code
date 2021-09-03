import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private userService:UserService) { }
  users: any = [];
  headers = [ "Name", "Address", "Occupation", "Date Of Birth"];
  ngOnInit(): void {
    this.users = this.userService.getUserlist();
}
}
