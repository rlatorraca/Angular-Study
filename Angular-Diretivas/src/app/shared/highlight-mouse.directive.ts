import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseSobreFrase() {
    /*
    this._renderer.setStyle(
      this._elementRef.nativeElement, 
      'background-color', 
      'yellow');  
      */
     this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseForaFrase() {
    /*
    this._renderer.setStyle(
      this._elementRef.nativeElement, 
      'background-color', 
      'white');  
      */
     this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string = "";
  @HostBinding('style.backgroundColor') get setColor(){
    // possivel incluir codigo extra para manipulacao, se necessario
    return this.backgroundColor;
  }
  

  private backgroundColor: string= "";

  constructor(
    //private _elementRef: ElementRef, 
    //private _renderer: Renderer2
    ) { }

}
