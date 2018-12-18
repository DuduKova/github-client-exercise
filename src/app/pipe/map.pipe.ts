import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'map'
})
export class MapPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return `<iframe width="600" height="450" frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/place?q=${value}&key=..." allowfullscreen></iframe>`;
    }

}
