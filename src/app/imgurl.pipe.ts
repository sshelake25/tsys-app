import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgurl'
})
export class ImgurlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
