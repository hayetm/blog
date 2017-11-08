import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor() { }

  ngOnInit() {
    this.articles = [
      {
        titre: 'Huda Beauty Obssessions Palette',
        date: '20/10/2017',
        image: '',
        description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
    },
    {
      titre: 'Huda Beauty Obssessions Palette',
      date: '20/10/2017',
      image: '',
      description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
    },
    {
      titre: 'Huda Beauty Obssessions Palette',
      date: '20/10/2017',
      image: '',
      description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
    },
    {
      titre: 'Huda Beauty Obssessions Palette',
      date: '20/10/2017',
      image: '',
      description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
    },
    {
      titre: 'Huda Beauty Obssessions Palette',
      date: '20/10/2017',
      image: '',
      description: 'Le 2 novembre prochain débarquent les nouvelles palettes Huda Beauty nanani nanana'
    }
  ]
  
}

}
