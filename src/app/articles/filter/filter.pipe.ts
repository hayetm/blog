import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../../article/article';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(articles: any, search?: any): any {
    if (search) search = search.toLowerCase();

    return articles.filter( (article) => {
      let foundInTitle = article.titre.toLowerCase().includes(search);
      let foundInDescription = article.description.toLowerCase().includes(search);
      return (foundInTitle || foundInDescription);

    });
  }

}
