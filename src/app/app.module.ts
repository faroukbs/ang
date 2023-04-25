import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceRoutingModule } from './annonce/annonce-routing.module';
import { FormproductComponent } from './formproduct/formproduct.component';
import { ShopComponent } from './shop/shop.component';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'product',component:FormproductComponent},
  {path:'shop',component:ShopComponent},
  //{path:'annonce',component:AnnonceComponent},
  {path:'**', component:NotFoundComponent}
  
  

]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AnnonceComponent,
    FormproductComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AnnonceRoutingModule
  ],
  
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

