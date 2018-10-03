import { Component } from '@angular/core';
import { LoginsService } from '../../services/logins/logins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
errorMsg = '';
email: string;
password: string;
  constructor(private authServ: LoginsService) { }


 login() {
   let login = this.authServ.login(this.email, this.password);
   console.log(login.then(res => console.log('Res:',res)).catch((err) => {
     console.log('Error:',err as string);
     if(err.code === 'auth/argument-error') {
    
      this.errorMsg = 'Password and Email required';
      this.timeOut5sec();
     } else if (err.code === 'auth/wrong-password') {
       this.errorMsg = 'Invalid password or email does not exist';
       this.timeOut5sec();
     } else if (err.code === 'auth/too-many-requests') {
       this.errorMsg = 'Too many unsuccelfull tries. Please try again later.'
       this.timeOut5sec();
     }
     else {
       this.errorMsg = 'User not found.'
       this.timeOut5sec();
     }
     
    }));
    
    
    }

    timeOut5sec() {
    
      setTimeout(() => {this.errorMsg = '';}, 5000);
  
    }

}


