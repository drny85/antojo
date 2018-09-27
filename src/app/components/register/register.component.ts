import { UsersService } from '../../services/users/users.service';
import { User } from './../../models/user';
import { ToastrService } from 'ngx-toastr';
import { LoginsService } from '../../services/logins/logins.service';
import { Component, OnInit } from '@angular/core';
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
    password: '',
    address: {
      address: '',
      apt: '',
      city: '',
      state: '',
      zipcode: ''
    },
    isAdmin: false

  }
  psw: string;
  pswMatching = false;
  error: string;

  constructor(private logServ: LoginsService, private msg: ToastrService, private router: Router, private userServ: UsersService) { }

  ngOnInit() {

  }

  onSubmit({value, valid}: { value: User, valid: boolean}) {
    
    if (!valid) {
      // add error
        console.log('error');

    } 
    if(this.psw === this.user.password) {
      //register the user
      this.logServ.register(this.user.email, this.user.password).then(res => {
        //set id in localstorage
        localStorage.setItem('userId', res.user.uid);
        //notify the user about success
        
        this.msg.success('Registration Succefull', 'Registered');
        //adding the user
        this.userServ.addUser(this.user, res.user.uid);
        this.router.navigate(['/login']);
      })
      .catch(err => this.msg.error(err.message, 'Error'));
      
    } else {
      this.error = 'Passwords do not match';
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
