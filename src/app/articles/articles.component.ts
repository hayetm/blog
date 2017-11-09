import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article';

const ARTICLES: Article[] = [
  {
    titre: 'Huda Beauty Obssessions Palette',
    date: new Date(2017,10,20),
    image: 'assets/obsessions.jpg',
    description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: new Date(2016,08,14),
  image: 'assets/obsessions.jpg',
  description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: new Date(2016,09,11),
  image: '../../assets/obsessions.jpg',
  description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: new Date(2017,05,20),
  image: '../../assets/obsessions.jpg',
  description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: new Date(2017,09,28),
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
  value: string;

  constructor() {
    this.search = '';
    this.articles = ARTICLES;
   }

  ngOnInit() {

}



}
