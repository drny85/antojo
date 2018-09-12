import { User } from './../../models/user';
import { ToastrService } from 'ngx-toastr';
import { LoginsService } from './../../services/logins.service';
import { Component, OnInit } from '@angular/core';
import { flatten } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    name: '',
    last_name: '',
    phone: '',
    email: '',
    password: ''

  }
  psw: string;
  pswMatching = false;

  constructor(private logServ: LoginsService, private msg: ToastrService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit({value, valid}: { value: User, valid: boolean}) {
    
    if (!valid) {
      // add error
        console.log('error');

    } 
    if(this.psw === this.user.password) {
      // add referral
      this.logServ.register(this.user.email, this.user.password).then(res => {
        this.msg.success('Registration Succefull', 'Registered');
        this.router.navigate['login'];
      })
      .catch(err => this.msg.error(err.message, 'Error'));
      
    } else {
      this.msg.error('Passwords do not match', 'Please Try Again');
      return;
    }
  }

  checkPassword(event) {
    let psw2_field = document.getElementById('psw2');
    if(this.user.password !== this.psw) {
      psw2_field.classList.add('is-invalid');
      
      this.pswMatching = false;
    } 
   
    if (this.user.password === this.psw && !this.pswMatching) {
      psw2_field.classList.remove('is-invalid');
      this.pswMatching = true;
    }
  }

}
