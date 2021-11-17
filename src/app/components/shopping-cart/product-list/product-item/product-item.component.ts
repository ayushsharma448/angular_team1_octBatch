import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService} from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem:Product;
  constructor(private msg: MessengerService,
    private cartService: CartService)
   { }

  ngOnInit(): void {
  }
    cartItem: CartItem;
  handleAddToCart()
  {
    
    this.msg.sendMsg(this.productItem);
   
  }


  //new added
  handleAddThroughApi()
  {
    this.cartItem= new CartItem(1,this.productItem.id,1001,1);
    console.log("object dtls:--"+this.cartItem.buyerId)
    this.msg.sendMsg(this.productItem);
    //console.log("inside hamdle method"+this.productItem);
    this.cartService.addProductToCart(this.cartItem);
  }

}
