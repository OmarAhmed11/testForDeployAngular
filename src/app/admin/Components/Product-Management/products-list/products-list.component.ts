import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Shared/Models/category';
import { Product } from 'src/app/Shared/Models/product';
import { ProductService } from 'src/app/Services/product.service';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  Products: Product[] = []
  includes: string[] = []
  Categories: Category[] = []
  constructor(private ProductService:ProductService,private CategoryService:CategoryService){

  }
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getCategories(){
    this.CategoryService.getAllCategory().subscribe(result => {
      this.Categories = result
    })
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
