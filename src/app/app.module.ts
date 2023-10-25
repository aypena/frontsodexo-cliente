import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeaturedNewsEntitysComponent } from './featured-news-entitys/featured-news-entitys.component';
import { NewscComponent } from './newsc/newsc.component';

import { HttpClientModule } from '@angular/common/http';
import { NoticiasComponent } from './noticias/noticias.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedNewsEntitysComponent,
    NewscComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
