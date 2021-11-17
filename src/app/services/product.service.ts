import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsGetUrl } from '../config/api';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[]=[
  //   new Product(1,'Product 1','mobile',36000,'11pro iphone 32GB ram',10),
  //   new Product(2,'Product 2','Camera',6000,'sony 2.1 focus',20),
  //   new Product(3,'Product 3','mobile',46000,'12pro iphone 32GB ram',30),
  //   new Product(4,'Product 4','laptop',38000,'500gb hard disk,10.0',40),
  //   new Product(5,'Product 5','laptop',29000,'windows 1o, 15.6',50),
  //   new Product(6,'Product 6','Apparels',600,'Tshirt U-turn red collar',60), 
  //   new Product(7,'Product 7','Apparels',600,'Jeans Highlander M-size',780)
  // ]
  constructor(private http: HttpClient) 
  {}

 // getProduct():Product[]
 // {
//    return this.products;
 // }
  getProduct():Observable<Product[]>
  {
    
    return this.http.get<Product[]>(productsGetUrl);
  }
}
