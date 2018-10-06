import { Subscription } from 'rxjs';
import { User } from './../../models/user';
import { UsersService } from './../../services/users/users.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit, OnDestroy {

  @ViewChild('closeModal') closeModal: ElementRef;

  subscription: Subscription;

  user: User;

  constructor(private userServ: UsersService, private modalService: NgbModal, private msg: ToastrService) {

      
      

   }

  async ngOnInit() {

    let id = localStorage.getItem('userId');
      if(id)  this.subscription = await this.userServ.getUser(id).subscribe(user => this.user = user);
  }

  updateUser(e, closeModal) {
    this.userServ.updateUser(this.user).then(() => this.msg.success('Profile Updated', 'Success'));
    closeModal.click();
  }

  changePicture(e) {
    console.log(e);
  }

  
 openLg(content) {
  // await this.addToCart();
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
