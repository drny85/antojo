import { Flavors } from './../../models/flavors';
import { FlavorsService } from './../../services/flavors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-flavor',
  templateUrl: './manage-flavor.component.html',
  styleUrls: ['./manage-flavor.component.css']
})
export class ManageFlavorComponent implements OnInit {


  flavors$;
  flavor: Flavors = {
    name: ''
  }

  constructor(private flavorServ: FlavorsService) {

    this.flavors$ = this.flavorServ.getFlavors();
   }

  ngOnInit() {
  }


addFlavor() {
 this.flavorServ.addFlavor(this.flavor).then(() => console.log(this.flavor));
 this.flavor.name = '';
}

deleteFlavor(id: string) {
 if(!confirm('Do you want to delete it?')) return;
 this.flavorServ.deleteFlavor(id).then(() => console.log('Flavor Deleted'))
}

}
