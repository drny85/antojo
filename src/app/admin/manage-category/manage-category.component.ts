import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  categories$;
  category: Category = {
    name: ''
  };

  constructor(private categoryServ: CategoryService) {

    this.categories$ = this.categoryServ.getCategories();
   }

  ngOnInit() {
  }

  addCategory() {
    this.categoryServ.addCategory(this.category).then(() => console.log(this.category));
    this.category.id = '';
    this.category.name = '';
  }

  deleteCategory(id: string) {
    if(!confirm('Do you want to delete it?')) return;
    this.categoryServ.deleteCategory(id).then(() => console.log('Category Deleted'))
  }

  fillName(e: any) {
    console.log(e.target.innerText);
  }



}
