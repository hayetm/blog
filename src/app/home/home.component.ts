import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article';

const ARTICLES: Article[] = [
  {
    titre: 'Huda Beauty Obssessions Palette',
    date: new Date(2017,10,20),
    image: '../../assets/obsessions.jpg',
    description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: new Date(2016,8,14),
  image: '../../assets/obsessions.jpg',
  description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: new Date(2016,9,11),
  image: '../../assets/obsessions.jpg',
  description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: new Date(2017,5,20),
  image: '../../assets/obsessions.jpg',
  description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
},
{
  titre: 'Huda Beauty Obssessions Palette',
  date: new Date(2017,9,28),
  image: '../../assets/obsessions.jpg',
  description: 'Salut, Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
}
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

articles: Article[];

  constructor() {
    this.articles = ARTICLES;
   }

  ngOnInit() {
  }

}
