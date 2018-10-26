import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any;

  constructor() { }

  ngOnInit() {
    axios.get("http://127.0.0.1:3333/api/v1/users", {
      headers: {
        authorization: localStorage.getItem("token")
      }
    }).then((response) => {
      this.users = response.data.data
    }).catch((error) => {
      alert(error)
    })
  }
}
