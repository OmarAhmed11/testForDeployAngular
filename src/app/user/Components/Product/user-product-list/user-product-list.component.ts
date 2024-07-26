import { Component } from '@angular/core';
import { Category } from 'src/app/Shared/Models/category';
import { Product } from 'src/app/Shared/Models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-user-product-list',
  templateUrl: './user-product-list.component.html',
  styleUrls: ['./user-product-list.component.scss']
})
export class UserProductListComponent {
  Products: Product[] = []
  includes: string[] = []
  Categories: Category[] = []
  constructor(private ProductService:ProductService){

  }
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getCategories(){
    this.Categories = [
      {id: 4, name: 'Laptop'},
      {id: 5, name: 'Mobile'}
    ]
  }
  getProducts() {
    this.includes.push('category')
    this.ProductService.getProductsByCondition(0,0,this.includes).subscribe({
      next: result => this.Products = result,
      error: err => alert("UnAuth")
    })
  }
  getByCategory(event:any){
    this.includes.push('category')
    var categoryId = event.target.value
    this.ProductService.getProductsByCondition(0,categoryId,this.includes).subscribe({
      next: result => this.Products = result,
      error: err => alert("UnAuth")
    })
  }
}
