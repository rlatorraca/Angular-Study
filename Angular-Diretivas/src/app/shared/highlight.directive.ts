import { Directive , HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseSobreFrase() {
    /*
    this._renderer.setStyle(
      this._elementRef.nativeElement, 
      'background-color', 
      'yellow');  
      */
     this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseForaFrase() {
    /*
    this._renderer.setStyle(
      this._elementRef.nativeElement, 
      'background-color', 
      'white');  
      */
     this.backgroundColor = this.defaultColor;
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string = "";
  @HostBinding('style.backgroundColor') get setColor(){
    // possivel incluir codigo extra para manipulacao, se necessario
    return this.backgroundColor;
  }
  

  private backgroundColor: string= "";
  @Input() defaultColor: string = 'grey';
  @Input() highlightColor: string = 'red';


  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
