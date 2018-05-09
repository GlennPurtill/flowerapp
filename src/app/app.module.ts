import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent } from './routes/nav.component';
import { AboutComponent } from './routes/about.component';
import { ProductsComponent } from './routes/products.component';
import { AppComponent } from './app.component';
import { GalaryComponent } from './routes/galary.component';
import { ContactComponent } from './routes/contact.component';
import { imgIntroComponent } from './routes/imgintro.component';
import { ReviewComponent } from './routes/review.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ProductsComponent,
    GalaryComponent,
    ContactComponent,
    imgIntroComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
