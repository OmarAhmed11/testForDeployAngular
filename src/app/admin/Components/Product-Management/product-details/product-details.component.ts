import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Shared/Models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:number = 0;
  Product!:Product;

  constructor(private ProductService:ProductService,private route:ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getProduct()
  }

  getProduct(){
    console.log(this.id)
    var includes = ['category'];
    this.ProductService.getProductById(this.id, includes).subscribe({
      next: result => { this.Product = result}
    })
  }
}
