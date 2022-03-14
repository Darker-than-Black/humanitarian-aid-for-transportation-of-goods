import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[fromType]'
})
export class FromTypeDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
