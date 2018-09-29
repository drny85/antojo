import { Component } from '@angular/core';
import { LoginsService } from '../../services/logins/logins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

email: string;
password: string;
  constructor(private authServ: LoginsService) { }


 login() {
    this.authServ.login(this.email, this.password);
    
    }

}


