import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProductService } from '../api-product.service';
import { Categories, Products } from '../types';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: Products[] = [];
  rating!: number;
  filterText: string = '';
  categories: Categories[] = [];

  constructor(private api: ApiProductService,
    private route: ActivatedRoute){}

   

  ngOnInit(): void {
   this.getProducts();
    this.getGategories();
  }

  getProducts() {
   this.api.getAllProducts()
  .subscribe((res:any) => 
    this.products = res.products);
}
  getGategories() {
   this.api.getAllCategories()
  .subscribe((res:any) => 
  this.categories = res);
}

filterCategory(event: any) {
  let value = event.target.value;
  (value == "All") ? this.getProducts() : this.getProductCategory(value)
}
 
getProductCategory(keyword: string) {
  this.api.getProductByCategory(keyword).subscribe((res:any) => {
    this.products = res.products;
  })
}

}
  


  