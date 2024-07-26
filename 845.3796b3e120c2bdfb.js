"use strict";(self.webpackChunkOnlineShop=self.webpackChunkOnlineShop||[]).push([[845],{845:(E,c,s)=>{s.r(c),s.d(c,{AuthenticationModule:()=>R});var d=s(6814),m=s(9310),i=s(95),e=s(4946),U=s(553),Z=s(9862);let g=(()=>{class o{constructor(n){this.http=n,this.BaseUrl=U.N.apiUrl}Login(n){return this.http.post(this.BaseUrl+"Authentication/Login",n)}Register(n,r){return this.http.post(this.BaseUrl+"Authentication/Register?role="+r,n)}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(Z.eN))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var p=s(8245),h=s(2425),f=s(2113);function A(o,a){1&o&&(e.TgZ(0,"span",29),e._uU(1,"UserName is Required"),e.qZA())}function b(o,a){1&o&&(e.TgZ(0,"span",29),e._uU(1,"Password is Required"),e.qZA())}let T=(()=>{class o{constructor(n,r,t,u,S,L){this.fb=n,this.router=r,this.AuthService=t,this.tokenService=u,this.toastr=S,this.localStorageService=L}ngOnInit(){this.initForm()}initForm(){this.form=this.fb.group({UserName:["",i.kI.required],Password:["",i.kI.required]})}get UserName(){return this.form.get("UserName")}get Password(){return this.form.get("Password")}Login(){this.form.invalid?this.form.markAllAsTouched():this.AuthService.Login({UserName:this.UserName?.value,Password:this.Password?.value}).subscribe({next:r=>{this.localStorageService.SetToken(r.token);let t=this.tokenService.getDecodedToken();this.localStorageService.SetUserData(t),this.tokenService.TokenAfterLogin$.next(!0),"Admin"===t.role?this.router.navigate(["/Admin"]):"User"===t.role&&this.router.navigate(["/User"]),this.toastr.success("Login Done")},error:r=>{console.log(r)}})}GoToRegisterPage(){this.router.navigate(["/Authentication/Register"])}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(i.qu),e.Y36(m.F0),e.Y36(g),e.Y36(p.B),e.Y36(h._W),e.Y36(f.n))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:43,vars:7,consts:[["id","main-wrapper",1,"container"],[1,"row","justify-content-center"],[1,"col-xl-10"],[1,"card","border-0"],[1,"card-body","p-0"],[1,"row","no-gutters"],[1,"col-lg-6"],[1,"p-5"],[1,"mb-5"],[1,"h4","font-weight-bold","text-theme"],[1,"h5","mb-0"],[1,"text-muted","mt-2","mb-5"],[3,"formGroup","ngSubmit"],[1,"form-group","mb-3"],["for","exampleInputEmail1",1,"mb-3"],["type","text","id","exampleInputEmail1","placeholder","UserName","formControlName","UserName",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"form-group","mb-5"],["for","exampleInputPassword1",1,"mb-3"],["type","text","id","exampleInputPassword1","placeholder","Password","formControlName","Password",1,"form-control"],["type","submit",1,"btn","btn-theme"],[1,"text-muted","text-center","mt-3","mb-0"],[1,"text-primary","ml-1",3,"click"],[1,"col-lg-6","d-none","d-lg-inline-block"],[1,"account-block","rounded-right"],[1,"overlay","rounded-right"],[1,"account-testimonial"],[1,"text-white","mb-4"],[1,"lead","text-white"],[1,"text-danger"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"h3",9),e._uU(10,"Login"),e.qZA()(),e.TgZ(11,"h6",10),e._uU(12,"Welcome back!"),e.qZA(),e.TgZ(13,"p",11),e._uU(14,"Enter your email address and password to access admin panel."),e.qZA(),e.TgZ(15,"form",12),e.NdJ("ngSubmit",function(){return t.Login()}),e.TgZ(16,"div",13)(17,"label",14),e._uU(18,"UserName"),e.qZA(),e._UZ(19,"input",15),e.YNc(20,A,2,0,"span",16),e.qZA(),e.TgZ(21,"div",17)(22,"label",18),e._uU(23,"Password"),e.qZA(),e._UZ(24,"input",19),e.YNc(25,b,2,0,"span",16),e.qZA(),e.TgZ(26,"button",20),e._uU(27,"Login"),e.qZA(),e._UZ(28,"hr"),e.TgZ(29,"p",21),e._uU(30,"Don't have an account? "),e.TgZ(31,"a",22),e.NdJ("click",function(){return t.GoToRegisterPage()}),e._uU(32,"register"),e.qZA()()()()(),e.TgZ(33,"div",23)(34,"div",24),e._UZ(35,"div",25),e.TgZ(36,"div",26)(37,"h4",27),e._uU(38,"This beautiful theme yours!"),e.qZA(),e.TgZ(39,"p",28),e._uU(40,'"Best investment i made for a long time. Can only recommend it for other users."'),e.qZA(),e.TgZ(41,"p"),e._uU(42,"- Admin User"),e.qZA()()()()()()()()()()),2&r&&(e.xp6(15),e.Q6J("formGroup",t.form),e.xp6(4),e.ekj("invalid",(null==t.UserName?null:t.UserName.invalid)&&(null==t.UserName?null:t.UserName.touched)),e.xp6(1),e.Q6J("ngIf",(null==t.UserName?null:t.UserName.invalid)&&(null==t.UserName?null:t.UserName.touched)),e.xp6(4),e.ekj("invalid",(null==t.Password?null:t.Password.invalid)&&(null==t.Password?null:t.Password.touched)),e.xp6(1),e.Q6J("ngIf",(null==t.Password?null:t.Password.invalid)&&(null==t.Password?null:t.Password.touched)))},dependencies:[d.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:["body[_ngcontent-%COMP%]{margin-top:20px;background:#f6f9fc}.account-block[_ngcontent-%COMP%]{padding:0;background-image:url(Space.b59c8c41d6b34303.jpg);background-repeat:no-repeat;background-size:cover;background-position:center center;width:100%;height:100%;position:relative}.account-block[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{flex:1;position:absolute;inset:0;background-color:#0006}.account-block[_ngcontent-%COMP%]   .account-testimonial[_ngcontent-%COMP%]{text-align:center;color:#fff;position:absolute;margin:0 auto;padding:0 1.75rem;bottom:3rem;left:0;right:0}.text-theme[_ngcontent-%COMP%]{color:#5369f8!important}.btn-theme[_ngcontent-%COMP%]{background-color:#5369f8;border-color:#5369f8;color:#fff}"]})}return o})();var l=s(2322);function N(o,a){1&o&&(e.TgZ(0,"span",18),e._uU(1,"UserName is Required"),e.qZA())}function w(o,a){1&o&&(e.TgZ(0,"span",18),e._uU(1,"Email is Required"),e.qZA())}function I(o,a){1&o&&(e.TgZ(0,"span",18),e._uU(1,"Password is Required"),e.qZA())}function P(o,a){if(1&o&&(e.TgZ(0,"option",19),e._uU(1),e.qZA()),2&o){const n=a.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.name)}}function _(o,a){1&o&&(e.TgZ(0,"span",18),e._uU(1,"role is Required"),e.qZA())}let q=(()=>{class o{constructor(n,r,t){this.fb=n,this.router=r,this.AuthService=t,this.Roles=[]}ngOnInit(){this.initForm(),this.getRoles()}initForm(){this.form=this.fb.group({UserName:["",i.kI.required],Password:["",i.kI.required],Email:["",i.kI.required],roleId:["",i.kI.required]})}getRoles(){this.Roles=[{id:l.u.Admin,name:l.u.Admin},{id:l.u.User,name:l.u.User},{id:l.u.HR,name:l.u.HR}]}get UserName(){return this.form.get("UserName")}get Email(){return this.form.get("Email")}get Password(){return this.form.get("Password")}get roleId(){return this.form.get("roleId")}RegisterUser(){if(0==this.roleId?.value&&this.roleId.setErrors({required:!0}),this.form.invalid)return void this.form.markAllAsTouched();let n=this.roleId?.value??"";this.AuthService.Register({userName:this.UserName?.value,password:this.Password?.value,email:this.Email?.value},n).subscribe({next:t=>{this.router.navigate(["/Authentication/Login"])},error:t=>{console.log(t)}})}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(i.qu),e.Y36(m.F0),e.Y36(g))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-register"]],decls:36,vars:14,consts:[[1,"w-75"],[3,"formGroup","ngSubmit"],[1,"form-group","mb-3","row"],["for","exampleInputEmail1",1,"col-2"],[1,"col-6"],["type","text","id","exampleInputEmail1","placeholder","UserName","formControlName","UserName",1,"form-control"],["class","text-danger",4,"ngIf"],["for","exampleInputEmail2",1,"col-2"],["type","text","id","exampleInputEmail2","placeholder","Email","formControlName","Email",1,"form-control"],["for","exampleInputEmail3",1,"col-2"],["type","password","id","exampleInputEmail3","placeholder","Password","formControlName","Password",1,"form-control"],[1,"mb-3","row"],[1,"col-2"],["formControlName","roleId",1,"form-select"],["value","0","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"row"],["type","submit",1,"btn","btn-primary","px-4"],[1,"text-danger"],[3,"value"]],template:function(r,t){1&r&&(e.TgZ(0,"h2"),e._uU(1,"Add User"),e.qZA(),e._UZ(2,"hr",0),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return t.RegisterUser()}),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"UserName"),e.qZA(),e.TgZ(7,"div",4),e._UZ(8,"input",5),e.YNc(9,N,2,0,"span",6),e.qZA()(),e.TgZ(10,"div",2)(11,"label",7),e._uU(12,"Email"),e.qZA(),e.TgZ(13,"div",4),e._UZ(14,"input",8),e.YNc(15,w,2,0,"span",6),e.qZA()(),e.TgZ(16,"div",2)(17,"label",9),e._uU(18,"Password"),e.qZA(),e.TgZ(19,"div",4),e._UZ(20,"input",10),e.YNc(21,I,2,0,"span",6),e.qZA()(),e.TgZ(22,"div",11)(23,"label",12),e._uU(24,"Role"),e.qZA(),e.TgZ(25,"div",4)(26,"select",13)(27,"option",14),e._uU(28,"Choose role"),e.qZA(),e.YNc(29,P,2,2,"option",15),e.qZA(),e.YNc(30,_,2,0,"span",6),e.qZA()(),e.TgZ(31,"div",16),e._UZ(32,"div",12),e.TgZ(33,"div",4)(34,"button",17),e._uU(35,"Submit"),e.qZA()()()()),2&r&&(e.xp6(3),e.Q6J("formGroup",t.form),e.xp6(5),e.ekj("invalid",(null==t.UserName?null:t.UserName.invalid)&&(null==t.UserName?null:t.UserName.touched)),e.xp6(1),e.Q6J("ngIf",(null==t.UserName?null:t.UserName.invalid)&&(null==t.UserName?null:t.UserName.touched)),e.xp6(5),e.ekj("invalid",(null==t.Email?null:t.Email.invalid)&&(null==t.Email?null:t.Email.touched)),e.xp6(1),e.Q6J("ngIf",(null==t.Email?null:t.Email.invalid)&&(null==t.Email?null:t.Email.touched)),e.xp6(5),e.ekj("invalid",(null==t.Password?null:t.Password.invalid)&&(null==t.Password?null:t.Password.touched)),e.xp6(1),e.Q6J("ngIf",(null==t.Password?null:t.Password.invalid)&&(null==t.Password?null:t.Password.touched)),e.xp6(5),e.ekj("invalid",null==t.roleId||null==t.roleId.errors?null:t.roleId.errors.required),e.xp6(3),e.Q6J("ngForOf",t.Roles),e.xp6(1),e.Q6J("ngIf",null==t.roleId||null==t.roleId.errors?null:t.roleId.errors.required))},dependencies:[d.sg,d.O5,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u]})}return o})(),k=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-logged-in-user"]],decls:4,vars:0,template:function(r,t){1&r&&(e.TgZ(0,"p"),e._uU(1,"logged-in-user works!"),e.qZA(),e.TgZ(2,"h1"),e._uU(3,"you already LoggedIn"),e.qZA())}})}return o})(),v=(()=>{class o{constructor(n,r,t,u){this.router=n,this.localStorageService=r,this.tokenService=t,this.toastr=u}canActivate(n,r){return!this.localStorageService.getToken()||(this.router.navigate(["/Authentication/LoggedIn"]),!1)}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(m.F0),e.LFG(f.n),e.LFG(p.B),e.LFG(h._W))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const C=[{path:"Login",component:T,canActivate:[v]},{path:"Register",component:q,canActivate:[v]},{path:"LoggedIn",component:k}];let y=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(C),m.Bz]})}return o})(),R=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[d.ez,y,i.UX]})}return o})()}}]);