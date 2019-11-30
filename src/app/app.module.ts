import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
  { path: 'san-pham', component: ProductsComponent },
  { path: 'tin-tuc', component: NewsComponent },
  
  //Route cho nhung link k tim thay
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
