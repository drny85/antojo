import { Addons } from './../../models/addons';
import { AddonsService } from './../../services/addons.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-addons',
  templateUrl: './manage-addons.component.html',
  styleUrls: ['./manage-addons.component.css']
})
export class ManageAddonsComponent implements OnInit, OnDestroy {

  addonSubscription: Subscription;
  toppingList;

  constructor(private addonsServ: AddonsService) { 

    this.addonSubscription = this.addonsServ.getAddons().subscribe(addons => {this.toppingList = addons[0].items.sort();
  });


}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.addonSubscription.unsubscribe();
  }

}
