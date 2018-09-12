import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../../services/logins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email: string;
password: string;
  constructor(private authServ: LoginsService, private route: Router) { }

  ngOnInit() {
    this.authServ.getState().subscribe(auth => {
      if (auth) {
        console.log(auth);
        this.route.navigate(['/']);
      }
    })
  }

  login() {
    this.authServ.login(this.email, this.password).then(user => {
      console.log(user);
      this.route.navigate(['/']);
    } )
    .catch(err => {

    })
  }

}
