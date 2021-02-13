import { Pipe, PipeTransform } from '@angular/core';
import {CountryDisplay} from "./ngx-mat-intl-tel-input.component";

import { Country } from './model/country.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // country | search:'searchCriteria'
  transform(country: CountryDisplay, searchCriteria?: string): boolean {
    if (!searchCriteria || searchCriteria === '') {
      return country.visible;
    }

    return country.visible && `${country.name}+${country.dialCode}`
      .toLowerCase()
      .includes(
        searchCriteria.toLowerCase()
      );
  }

}
