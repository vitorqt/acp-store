import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public name: string;
  public email: string;
  public password: string;
  public password_confirmation: string;
  public role: string;
  
  constructor() { }

  ngOnInit() {
  }

  private submit() {
    axios.post('http://127.0.0.1:3333/api/v1/users', {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation,
      role: this.role
    }).then((response) => {
      swal("Sucesso!", "Usuario criado!", "success")
    }).catch((response) => {
      swal("Erro!", "Ocorreu um problema!", "error");
    })
  }
}
