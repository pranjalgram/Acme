import { Component,OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
pageTitle:string="Product List";
showImage:boolean=false;
//listFilter:string='';
_listFilter:string;
filteredProducts:IProduct[];
products:IProduct[]=[];
errorMessage:string;
constructor(private productService:ProductService){
    this.filteredProducts=this.products;
}
get listFilter():string{
    return this._listFilter;
}
set listFilter(value:string){
     this._listFilter=value;
     this.filteredProducts=this._listFilter?this.performFilter(this.listFilter):this.products;
}
performFilter(filterBy:string):IProduct[]{
    filterBy=filterBy.toLowerCase();
    return this.products.filter((product,IProduct)=>
        product.productName.toLowerCase().indexOf(filterBy)!==-1);
}

toggleImage(){
    this.showImage=!this.showImage;
}
onRatingClicked(message:string):void
{
    this.pageTitle="Product List"+" "+message;
}
ngOnInit(): void {
    this.productService.getProducts().subscribe({
        next:products=>
        {   this.products=products;
            this.filteredProducts=this.products;
        },
        error:err=>this.errorMessage=err
    });
    
}
}