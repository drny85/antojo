import { UsersService } from './../../services/users/users.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  user$;

  constructor(private userService: UsersService) { 
   this.user$ =  this.userService.user;
   
  }

  ngOnInit() {
    console.log(this.user$);
  }


  saveOrder(e) {
    console.log(e.value);
  }

}
