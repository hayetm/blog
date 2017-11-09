import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../../article/article';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(articles: any, args?: any): any {

      return articles.sort((a: any, b: any) => {
               let date1 = new Date(a.date);
               let date2 = new Date(b.date);

               if (date1 > date2) {
                   return 1;
               } else if (date1 < date2) {
                   return -1;
               } else {
                   return 0;
               }
             });
  }

}
