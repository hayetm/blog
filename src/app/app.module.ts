import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { DatePipe } from './articles/date/date.pipe';
import { FilterPipe } from './articles/filter/filter.pipe';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
        { path: 'articles', component: ArticlesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArticlesComponent,
    HomeComponent,
    CardComponent,
    DatePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
