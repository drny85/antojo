import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginsService } from './services/logins/logins.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private auth: LoginsService, private router: Router) {
    
}


}
