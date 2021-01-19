import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  private _hasView = false
 
  // Toda vez que for modificar o ngElse, fara a modificacao do template
  @Input() set ngElse(condicao: boolean){
    if (!condicao && this._hasView){
      this._hasView = false;
      this._viewContainerRef.createEmbeddedView(this._templateRef)
    } else if (condicao && !this._hasView){
      this._hasView = true;
      this._viewContainerRef.clear(); // Distroe o elemento a construir no template
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }



}
