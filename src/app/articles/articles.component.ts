import { Component, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common';
import { Article } from '../article/article';

const ARTICLES: Article[] = [
  {
    titre: 'Huda Beauty Obssessions Palette',
    date: '20/10/2017',
    image: '../../assets/obsessions.jpg',
    description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: '20/10/2017',
  image: '../../assets/obsessions.jpg',
  description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: '20/10/2017',
  image: '../../assets/obsessions.jpg',
  description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: '20/10/2017',
  image: '../../assets/obsessions.jpg',
  description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: '20/10/2017',
  image: '../../assets/obsessions.jpg',
  description: 'Salut, Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
}
]

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];
  search: string;

  constructor() {
    this.search = '';
    this.articles = ARTICLES;
   }

  ngOnInit() {

}



}
