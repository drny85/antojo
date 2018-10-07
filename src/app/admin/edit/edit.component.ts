import { FlavorsService } from './../../services/flavors.service';
import { Addons } from './../../models/addons';
import { AddonsService } from './../../services/addons.service';
import { FormControl } from '@angular/forms';

import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { CategoryService } from './../../services/category.service';

import { Component,  OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnDestroy{

  categories$;
  id: string;
  addonSubscription: Subscription; 
  subscription: Subscription;
  flavorSubscription: Subscription;
  toppings = new FormControl();
  flavors = new FormControl();
  toppingList;
  addons: [string];
  flavorsList;
  flavorsItem: [string]

  product: Product = {
    name: '',
    price: 0,
    category: '',
    picture: '',
    updated: '',
    quantity: 0,
    addons: [''],
    instruction: ''
    
  }

  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  snapshot: Observable<any>;

  constructor(
    private category: CategoryService, 
    private activeRoute: ActivatedRoute, 
    private message: ToastrService, 
    private prodServ: ProductService,
    private afStorage: AngularFireStorage, 
    private router: Router,
    private flavorServ: FlavorsService,
    private addonsServ: AddonsService
    ) {

    this.categories$ = this.category.getCategories();
    this.id = this.activeRoute.snapshot.params['id'];
    if(this.id) {
     this.subscription =  this.prodServ.getProduct(this.id).subscribe(prod => this.product = prod);
    
    }
    this.addonSubscription = this.addonsServ.getAddons().subscribe(addons => {this.toppingList = addons;
   
    })

    this.flavorSubscription = this.flavorServ.getFlavors().subscribe(flavors => {this.flavorsList = flavors;
    
    });

    
   }


  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.addonSubscription.unsubscribe();
  }

  onUpload(event) {
    
    const id = Math.random().toString(36).substring(2);
    let file = <File>event.target.files[0];
    let imagSize = file.size;
    let fileType = file.type;
    let name = file.name;
    let ext = fileType.split('/', 1);

    if (imagSize > 3000000) {

      this.message.error('File is too large', 'Error Uploading');
      return;

    } 

    if (ext[0] !== 'image') {
      this.message.error('Invalid File', 'Error Uploading');
      return;
    } 

    // let reference = this.afStorage.ref('img/' + id + '-' + name);
    let reference = this.afStorage.ref('img/' + id + '-' + name);
    this.task = reference.put(file);
    this.uploadProgress = this.task.percentageChanges();
    this.task.then( snap => snap.ref.getDownloadURL().then(urlPic => {this.downloadURL = urlPic; this.product.picture = urlPic}));
    this.message.success('Image succesfully uploaded', 'Great');
   
  }

  onSubmit({value, valid}: { value: Product, valid: boolean}) {
    
    if (!valid) {
      // add error
      console.log('error');
      console.log(this.product);
      return;
  
    } else {
      // Update product
      this.product.updated = new Date().toLocaleString();
      this.product.addons = this.addons || this.product.addons;
      this.product.flavors = this.flavorsItem || this.product.flavors;
      this.prodServ.updateProduct(this.product).then(() => this.message.success('Product Updated', 'Success!'))
      .catch(err => {this.message.error('Something went wrong', 'Error!');
      console.log(err);
    });
      this.router.navigate(['admin/products']);
     
    }
  }

  delete() {
    if (confirm('Are you sure you want to delete this procuct?')) {
      this.prodServ.deleteProduct(this.id);
      this.message.info('Product has been deleted', 'Deleted!');
      this.router.navigate(['/admin/products']);
    } else {
    this.message.info('No changes were made', 'Canceled');
    return;
    }
  
  }

}
