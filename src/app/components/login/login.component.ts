import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginsService } from '../../services/logins/logins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email: string;
password: string;
  constructor(private authServ: LoginsService, private route: Router, private msg: ToastrService) { }

  ngOnInit() {
    this.authServ.getState().subscribe(auth => {
      if (auth) {
        this.route.navigate(['/']);
      }
    })
  }

  login() {
    this.authServ.login(this.email, this.password).then((res) => localStorage.setItem('userId', res.user.uid) );
    }

}
