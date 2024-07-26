import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Category } from 'src/app/Shared/Models/category';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Shared/Models/product';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup;
  Categories: Category[] = []
  constructor(private fb: FormBuilder, private ProductService:ProductService,
    private router: Router, private CategoryService:CategoryService
  ) {

  }
  ngOnInit(): void {
    this.initForm()
    this.getCategories()
  }

  initForm(){
    this.form = this.fb.group({
      productName: ['',Validators.required],
      categoryId: [0,Validators.required],
    });
  }
  getCategories(){
    this.CategoryService.getAllCategory().subscribe(result => {
      this.Categories = result
    })
  }
  AddProduct(){
    if(this.categoryId?.value == 0){
      this.categoryId.setErrors({ required: true })
    }
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    var product:Product = {
      name: this.productName?.value,
      categoryId: this.categoryId?.value
    }
    this.ProductService.AddProduct(product).subscribe({
      next: result => {this.router.navigate(['/Admin/products'])},
      error: err => { console.log(err)}
    })
  }
  get productName() {
    return this.form.get('productName');
  }
  get categoryId() {
    return this.form.get('categoryId');
  }
}
