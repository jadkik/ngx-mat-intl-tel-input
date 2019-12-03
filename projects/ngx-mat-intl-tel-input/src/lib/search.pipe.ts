import { Pipe, PipeTransform } from '@angular/core';
import {CountryDisplay} from "./ngx-mat-intl-tel-input.component";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // country | search:'searchCriteria'
  transform(country: CountryDisplay, searchCriteria?: any): any {
    if (!searchCriteria || searchCriteria === '') {
      return country.visible;
    }

    return country.visible && country.name.toLowerCase().includes(searchCriteria.toLowerCase());
  }

}
