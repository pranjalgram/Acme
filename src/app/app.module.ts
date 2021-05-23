import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {ConverToSpacePipe} from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import {RouterModule} from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailGuard} from './products/product-detail.guard';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverToSpacePipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'products/:id',canActivate:[ProductDetailGuard],component:ProductDetailComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:' ',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
