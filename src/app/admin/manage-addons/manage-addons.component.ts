import { Addons } from './../../models/addons';
import { AddonsService } from './../../services/addons.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-addons',
  templateUrl: './manage-addons.component.html',
  styleUrls: ['./manage-addons.component.css']
})
export class ManageAddonsComponent implements OnDestroy {

  addonSubscription: Subscription;
  addons: Addons[];
  addon: Addons = {
    name: ''
  }

  constructor(private addonsServ: AddonsService) { 
    
    this.addonSubscription = this.addonsServ.getAddons().subscribe(addons => {this.addons = addons;
    
  });


}

  ngOnDestroy() {
    this.addonSubscription.unsubscribe();
  }

  deleteAddon(id: string) {
    
     this.addonsServ.deleteAddon(id).then(() => console.log('Addon deleted'));
   
  }

  addAddon() {
    this.addonsServ.addAddon(this.addon).then(()=> console.log('Addon Added'));
    this.addon.name = '';
  }

}
