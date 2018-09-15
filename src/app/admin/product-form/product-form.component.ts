import { take } from 'rxjs/operators';
import { Product } from './../../models/product';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';

import { ProductService } from '../../services/product.service';




@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
 
  product: Product = {
    name: '',
    price: 0,
    category: '',
    picture: '',
    updated: ''
    
  }

  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  snapshot: Observable<any>;
  

  constructor(
    private catServ: CategoryService, 
    private afStorage: AngularFireStorage, 
    private message: ToastrService, 
    private prodServ: ProductService,
    private router: Router) {
  
    this.categories$= this.catServ.getCategories();
  }

  ngOnInit() {
  
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
      // add product
      this.product.updated = new Date().toLocaleString();
      this.prodServ.saveProduct(this.product).then(() => this.message.success('New Product Added', 'Success!'))
      .catch(err => {this.message.error('Something went wrong', 'Error!');
      console.log(err);
    });
      this.router.navigate(['admin/products']);
      this.message.success('Product Added...', 'Added!' );
  
    }
  }

}
