
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userServ: UsersService) {}
  


  ngOnInit() {
    
  }
    


}
