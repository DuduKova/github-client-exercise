import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'company'
})
export class CompanyPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value;
    }

}
