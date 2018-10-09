import { Order } from './../models/order';
import { OrderService } from './../services/order.service';
import { ProductService } from './../services/product.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Product } from '../models/product';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Order>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['name', 'price'];
  displayedColumns: string[] = ['name', 'date', 'status', 'amount'];

  constructor(private orderServ: OrderService) {
    let id = localStorage.getItem('userId');
    if(id){

      this.orderServ.getUserId(id).subscribe(data => {
        if(data) {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        } else {
          return null;
  
        
        }
      });

    }
    
  
  }

  ngOnInit() {
   
    
  }
}
