import { Directive, ElementRef, HostListener } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Directive({
  selector: '[appPriceChecker]'
})
export class PriceCheckerDirective {

  constructor(private el: ElementRef) { }
  
  @HostListener('change', ['$event.target'])
  onChange(target: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    console.log('O valor do elemento foi alterado:', target);
    // Aqui você pode adicionar lógica adicional, como enviar uma solicitação HTTP
  }

  @HostListener('onChange', ['$event'])
  onDropdownChange(event: any) {
    const parentElement = this.el.nativeElement
  }
}
