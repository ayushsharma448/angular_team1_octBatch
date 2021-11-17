import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Login } from 'src/app/models/login';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[
              // {id:1, productId:1, productName:'prod1', qty:4,price:100},
           ];

  success:Boolean=false;
  cardTotal=0;
  constructor(
    private msg: MessengerService,
    private cartService: CartService
    ){ }

  ngOnInit(): void
   { 
    this.handleSubscription();
    this.loadCartItems();
   }

handleSubscription()
{
  this.msg.getMsg().subscribe( (product:Product)=> {
    this.addProductToCart(product);
    //this.loadCartItems();
  });
}

loadCartItems(){
  this.cartService.getCartItems().subscribe
  (
    (items: CartItem[])=> {console.log(items)}
  )
}


  addProductToCart(product:Product)
  {
    
   let productExists=false;
   for(let index in this.cartItems){
    if(this.cartItems[index].productId === product.id){
     this.cartItems[index].qty++;
     productExists=true;
     break;
    }
  }

  if(!productExists)
  {
      this.cartItems.push({
      productId:product.id,
      productName: product.name,
      qty: 1,
      price:product.price
      });
  }
      this.calculateCartTotal();
  }
  
  calculateCartTotal()
  {
    this.cardTotal=0;

      this.cartItems.forEach(item=>{
          this.cardTotal +=(item.qty * item.price)
                          });
  }
  clearAllCart()
  {
    
    this.cartService.purchaseHistory(0,1001);
  }

  removeItemCart(itemCart,event)
  {
    const index: number =this.cartItems.indexOf(itemCart);
    this.cardTotal -=(itemCart.price*itemCart.qty);
    this.cartItems.splice(index,1);
    //console.log(index);
  }

  purchase(index,buyerId){
    this.cartService.purchaseHistory(index,buyerId)
  }

  successOrder()
  {
    
    //  this.cartItems.length=0; 
    //   this.purchase(1,1002);
      this.cartService.purchaseHistory(1,1)
      this.cartItems.length=0;
     // alert("Your order has been placed successfully!!");
      //.subscribe({  
      //   next: data => {
      //         //console.log("This is data",data);
      //         this.success=true;
              
      //         alert("Your order has been placed successfully!!");
      //     },
      //     error: error => {
      //         console.error('There was an error!', error);
      //     }
      // })
  }
}

//implement remove for particular product for particular index ----- (cart item)
//implement removeall from add cart
//implement buy now and add product to history table   ----- clearCart and deleteAllCartData
//image to fetch from database//