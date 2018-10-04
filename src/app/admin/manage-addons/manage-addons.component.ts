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
  addon: any;
  newAddons: string[] = [];

  constructor(private addonsServ: AddonsService) { 
    
    this.addonSubscription = this.addonsServ.getAddons().subscribe(addons => {this.toppingList = addons[0].items.sort();
      this.newAddons = addons[0].items.sort()
      this.addon = addons;
  });


}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.addonSubscription.unsubscribe();
  }

  deleteAddon(e: string) {
    let index = this.newAddons.indexOf(e);
    let addon = this.addon.splice(index, 1);
    
    //this.addonsServ.updateAddons(this.addon);
    console.log(this.newAddons);
  }

}
