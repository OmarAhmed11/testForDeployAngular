"use strict";(self.webpackChunkOnlineShop=self.webpackChunkOnlineShop||[]).push([[578],{1578:(_,g,s)=>{s.r(g),s.d(g,{AdminModule:()=>Y});var d=s(6814),a=s(9310),t=s(4946),p=s(9676);let h=(()=>{class e{constructor(r,o){this.ProductService=r,this.route=o,this.id=0}ngOnInit(){this.id=this.route.snapshot.params.id,this.getProduct()}getProduct(){console.log(this.id),this.ProductService.getProductById(this.id,["category"]).subscribe({next:o=>{this.Product=o}})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p.M),t.Y36(a.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-details"]],decls:7,vars:2,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"product-details works!"),t.qZA(),t.TgZ(2,"div")(3,"h1"),t._uU(4),t.qZA(),t.TgZ(5,"h1"),t._uU(6),t.qZA()()),2&o&&(t.xp6(4),t.Oqu(i.Product.name),t.xp6(2),t.Oqu(null==i.Product.category?null:i.Product.category.name))}})}return e})();var n=s(95),f=s(553),v=s(9862);let m=(()=>{class e{constructor(r){this.http=r,this.BaseUrl=f.N.apiUrl}getAllCategory(){return this.http.get(this.BaseUrl+"Category/GetAll")}InsertCategory(r){this.http.post(this.BaseUrl+"Category/Insert",r)}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(v.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function y(e,c){1&e&&(t.TgZ(0,"span",14),t._uU(1,"Product Name is Required"),t.qZA())}function A(e,c){if(1&e&&(t.TgZ(0,"option",15),t._uU(1),t.qZA()),2&e){const r=c.$implicit;t.Q6J("value",r.id),t.xp6(1),t.Oqu(r.name)}}function Z(e,c){1&e&&(t.TgZ(0,"span",14),t._uU(1,"Category is Required"),t.qZA())}let C=(()=>{class e{constructor(r,o,i,u){this.fb=r,this.ProductService=o,this.router=i,this.CategoryService=u,this.Categories=[]}ngOnInit(){this.initForm(),this.getCategories()}initForm(){this.form=this.fb.group({productName:["",n.kI.required],categoryId:[0,n.kI.required]})}getCategories(){this.CategoryService.getAllCategory().subscribe(r=>{this.Categories=r})}AddProduct(){0==this.categoryId?.value&&this.categoryId.setErrors({required:!0}),this.form.invalid?this.form.markAllAsTouched():this.ProductService.AddProduct({name:this.productName?.value,categoryId:this.categoryId?.value}).subscribe({next:o=>{this.router.navigate(["/Admin/products"])},error:o=>{console.log(o)}})}get productName(){return this.form.get("productName")}get categoryId(){return this.form.get("categoryId")}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu),t.Y36(p.M),t.Y36(a.F0),t.Y36(m))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-form"]],decls:24,vars:8,consts:[[1,"w-75"],[3,"formGroup","ngSubmit"],[1,"form-group","mb-3","row"],["for","exampleInputEmail1",1,"col-2"],[1,"col-6"],["type","text","id","exampleInputEmail1","placeholder","Product Name","formControlName","productName",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"mb-3","row"],[1,"col-2"],["formControlName","categoryId",1,"form-select"],["value","0","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"row"],["type","submit",1,"btn","btn-primary","px-4"],[1,"text-danger"],[3,"value"]],template:function(o,i){1&o&&(t.TgZ(0,"h2"),t._uU(1,"Add Product"),t.qZA(),t._UZ(2,"hr",0),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return i.AddProduct()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"Product Name"),t.qZA(),t.TgZ(7,"div",4),t._UZ(8,"input",5),t.YNc(9,y,2,0,"span",6),t.qZA()(),t.TgZ(10,"div",7)(11,"label",8),t._uU(12,"Category"),t.qZA(),t.TgZ(13,"div",4)(14,"select",9)(15,"option",10),t._uU(16,"Choose Category"),t.qZA(),t.YNc(17,A,2,2,"option",11),t.qZA(),t.YNc(18,Z,2,0,"span",6),t.qZA()(),t.TgZ(19,"div",12),t._UZ(20,"div",8),t.TgZ(21,"div",4)(22,"button",13),t._uU(23,"Submit"),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("formGroup",i.form),t.xp6(5),t.ekj("invalid",(null==i.productName?null:i.productName.invalid)&&(null==i.productName?null:i.productName.touched)),t.xp6(1),t.Q6J("ngIf",(null==i.productName?null:i.productName.invalid)&&(null==i.productName?null:i.productName.touched)),t.xp6(5),t.ekj("invalid",null==i.categoryId||null==i.categoryId.errors?null:i.categoryId.errors.required),t.xp6(3),t.Q6J("ngForOf",i.Categories),t.xp6(1),t.Q6J("ngIf",null==i.categoryId||null==i.categoryId.errors?null:i.categoryId.errors.required))},dependencies:[d.sg,d.O5,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u],styles:[".invalid[_ngcontent-%COMP%]{border:1px solid red!important}"]})}return e})();function T(e,c){if(1&e&&(t.TgZ(0,"option",8),t._uU(1),t.qZA()),2&e){const r=c.$implicit;t.Q6J("value",r.id),t.xp6(1),t.Oqu(r.name)}}const P=function(e){return["/Admin/product",e]};function U(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"div",9)(2,"div",10),t._UZ(3,"img",11),t.TgZ(4,"div",12)(5,"div",13)(6,"h5",14),t._uU(7),t.qZA(),t.TgZ(8,"p",15),t._uU(9),t.qZA(),t.TgZ(10,"p",15),t._uU(11),t.qZA(),t.TgZ(12,"p",15),t._uU(13),t.qZA()(),t.TgZ(14,"div",16)(15,"a",17),t._uU(16,"Details"),t.qZA(),t.TgZ(17,"a",18),t._uU(18,"Add To Cart"),t.qZA()()()()(),t.BQk()),2&e){const r=c.$implicit;t.xp6(7),t.Oqu(r.name),t.xp6(2),t.Oqu(r.description),t.xp6(2),t.Oqu(r.image),t.xp6(2),t.Oqu(null==r.category?null:r.category.name),t.xp6(2),t.Q6J("routerLink",t.VKq(5,P,r.id))}}let F=(()=>{class e{constructor(r,o){this.ProductService=r,this.CategoryService=o,this.Products=[],this.includes=[],this.Categories=[]}ngOnInit(){this.getProducts(),this.getCategories()}getCategories(){this.CategoryService.getAllCategory().subscribe(r=>{this.Categories=r})}getProducts(){this.includes.push("category"),this.ProductService.getProductsByCondition(0,0,this.includes).subscribe({next:r=>this.Products=r,error:r=>alert("UnAuth")})}getByCategory(r){this.includes.push("category"),this.ProductService.getProductsByCondition(0,r.target.value,this.includes).subscribe({next:i=>this.Products=i,error:i=>alert("UnAuth")})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p.M),t.Y36(m))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-products-list"]],decls:13,vars:2,consts:[[1,"row"],[1,"col-3"],["routerLink","/Admin/add-product",1,"btn","btn-primary","mb-3"],[1,"form-select",3,"change"],["value","0","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"row","col-9"],[4,"ngFor","ngForOf"],[3,"value"],[1,"col-4","mb-3","p-0","d-flex","justify-content-center","CustomHeight"],[1,"card",2,"width","80%"],["src","https://placehold.co/200","alt","...",1,"card-img-top"],[1,"card-body","d-flex","align-items-start","flex-column","justify-content-between"],[1,""],[1,"card-title"],[1,"card-text"],[1,"d-flex","justify-content-center"],[1,"btn","btn-primary","me-1",3,"routerLink"],[1,"btn","btn-primary"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"a",2),t._uU(3,"Add Product"),t.qZA(),t.TgZ(4,"h3"),t._uU(5,"Choose your Filter"),t.qZA(),t._UZ(6,"hr"),t.TgZ(7,"select",3),t.NdJ("change",function(L){return i.getByCategory(L)}),t.TgZ(8,"option",4),t._uU(9,"Choose Category"),t.qZA(),t.YNc(10,T,2,2,"option",5),t.qZA()(),t.TgZ(11,"div",6),t.YNc(12,U,19,7,"ng-container",7),t.qZA()()),2&o&&(t.xp6(10),t.Q6J("ngForOf",i.Categories),t.xp6(2),t.Q6J("ngForOf",i.Products))},dependencies:[d.sg,a.rH,n.YN,n.Kr],styles:[".CustomHeight[_ngcontent-%COMP%]{min-height:450px}"]})}return e})(),q=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-home"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"admin-home works!"),t.qZA())}})}return e})();var I=s(2322),S=s(2113),N=s(8245),b=s(2425);let l=(()=>{class e{constructor(r,o,i,u){this.router=r,this.localStorageService=o,this.tokenService=i,this.toastr=u}canActivate(r,o){const i=this.tokenService.getUser();return null!=this.localStorageService.getToken()?this.tokenService.isTokenExpired()?(this.toastr.error("Your Session Ended and u need to login again"),localStorage.clear(),this.tokenService.TokenAfterLogin$.next(!1),this.router.navigateByUrl("/Authentication/Login"),!1):i?.role===I.u.Admin||(this.router.navigateByUrl("welcome"),this.toastr.error("Un Auth"),!1):(this.toastr.error("u neet to login first"),this.tokenService.TokenAfterLogin$.next(!0),this.router.navigateByUrl("/Authentication/Login"),!1)}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(a.F0),t.LFG(S.n),t.LFG(N.B),t.LFG(b._W))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();const O=[{path:"",redirectTo:"adminHome",pathMatch:"full"},{path:"adminHome",component:q,canActivate:[l]},{path:"products",component:F,canActivate:[l]},{path:"product/:id",component:h,canActivate:[l]},{path:"add-product",component:C,canActivate:[l]}];let x=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(O),a.Bz]})}return e})(),Y=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[d.ez,x]})}return e})()}}]);