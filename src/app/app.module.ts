import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './utilidades/header/header.component';
import { FooterComponent } from './utilidades/footer/footer.component';
import { BodyComponent } from './pages/body/body.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContactComponent,
    DetailsComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
