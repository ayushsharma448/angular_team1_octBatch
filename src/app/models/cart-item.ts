import {Product} from './product';

export class CartItem {
    id:number;
    pid:number;
    buyerId:number;
    purchaseQunatity:number;
    price:number;

    constructor(id:number,pid:number,buyerId:number,qty=0)
    {
       // this.id=id;
        this.pid=pid;
        this.buyerId=buyerId;
        this.purchaseQunatity=qty;
        //this.price=product.price;
    }

}
