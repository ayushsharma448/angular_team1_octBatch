import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
login:Login;
  onSubmit(){
    // console.log("form is submitted");
    if((this.credentials.username != '' && this.credentials.password!= '')&&
    (this.credentials.username != null && this.credentials.password!= null))
    {
      if((this.credentials.username=='admin' && this.credentials.password=='pass'))
      {
        this.login= new Login(1,this.credentials.username,this.credentials.password);
        alert("We have submit");
        this.router.navigateByUrl('/home');
        return;
      }
      
      alert("enter correct credentials");
    }
    else{
      alert("fields are empty");
    }
    
  }

}
