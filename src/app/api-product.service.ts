import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  private apiUrl = 'https://dummyjson.com/';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.apiUrl + 'products');
  }
  
  getAllCategories(){
    return this.http.get(this.apiUrl + 'products/categories');
  }

  getProductByCategory(keyword: string) {
    return this.http.get(this.apiUrl + 'products/category/' + keyword);
  }
   getProductById(id: any) {
    return this.http.get(this.apiUrl + 'products/' + id);
  }

 

}
