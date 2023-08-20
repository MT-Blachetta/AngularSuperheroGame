import { Pipe, PipeTransform } from '@angular/core';
import { Superhuman } from '../interfaces/superhuman';

@Pipe({
  name: 'dead'
})
export class DeadPipe implements PipeTransform {

  transform(value: Superhuman[], isAlive: boolean): Superhuman[] {
    return value.filter(sup => sup.dead===isAlive);
  }

}
