import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorise'
})
export class CategoryPipe implements PipeTransform {

  transform(data: Array<any>, searchTxt: string ): Array<any> {
    return data.filter(getData);
        function getData(value:any, index:any){
            if(value.genre.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1 ) {
              console.log("dataa",value.category)
              return data[index];
              }
               
        };
  };
  

}
