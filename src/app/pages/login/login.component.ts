import { Login } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.createForm(new Login())

  }

  createForm(login: Login) {
    this.form = this.formBuilder.group({
      email: [login.email],
      senha: [login.senha],
    })
}

login(){
  if(this.form.value.email == "jessica@email.com" && this.form.value.senha == "1234"){
    alert("acesso permitido")
  }else{
    alert("acesso negado")
  }
}
}
