import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProductService } from '../api-product.service';
import { Products } from '../types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: any;
  data: any = {};
  newImageString!: string;

  constructor(private route: ActivatedRoute,
    private api: ApiProductService) {
      this.id = this.route.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.api.getProductById(this.id).subscribe(res => {
      this.data = res;
    })
  }

  changeImg(event: any) {
    this.newImageString = event.target.getAttribute('src');
    document.getElementById('view-img')?.setAttribute('src', this.newImageString);
  }

}
