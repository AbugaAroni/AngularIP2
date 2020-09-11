import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employmentChecker'
})
export class EmploymentCheckerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
