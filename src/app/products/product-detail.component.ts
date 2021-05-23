import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string='Product Detail';
  product:IProduct;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id=+this.route.snapshot.paramMap.get('id');
    this.pageTitle+=`:${id}`;
    this.product={
      "productId": id,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2019",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"

    }
    
  }
  onBack():void{
    this.router.navigate(['/products']);
  }

}
