import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { HttpClient, HttpParams } from '@angular/common/http';
import { cartAddUrl,cartGetDtls } from '../config/api';
import { Product } from '../models/product';
import { map } from 'rxjs';
import { deleteCartData } from '../config/api';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]>
  {
    return this.http.get<CartItem[]>(cartGetDtls)  
    
  }

  

  public addProductToCart(cartItem:CartItem){
   this.http.post<any>(cartAddUrl, cartItem).subscribe({  
    next: data => {
          console.log(JSON.stringify(data));
      },
      error: error => {
          console.error('There was an error!', error);
      }
  })
  }
  public purchaseHistory(index,buyerId){
//console.log(this.http.delete<any>(deleteCartData+`?buyerId=${buyerId}&index=${index}`));
alert("inside purchase history")
     this.http.delete<any>(deleteCartData+`?buyerId=${buyerId}&index=${index}`).subscribe({  
      next: (data:String) => {
            console.log("india");
        },
        error: error => {
            console.error('There was an error!', error);
        }
    })

   }
}
