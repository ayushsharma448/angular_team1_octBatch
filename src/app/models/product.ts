
export class Product {
    id:number;
    name:String;
    category:String;
    price:number;
    model:String;
    quantity:number;
    imageUrl:String;

    constructor(id:number,name:String, category:String, price:number=0,
         model:String='',quantity:number=0,imageUrl:String)
    {
        this.id=id;
        this.name= name;
        this.category=category;
        this.price=price;
        this.model=model;
        this.quantity=quantity;
        this.imageUrl=imageUrl;

    }
}
