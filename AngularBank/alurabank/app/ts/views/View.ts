class View<T> {

    protected _element: Element;


    constructor(selector: string){
        this._element = document.querySelector(selector);
    }

    update(model: T){
        this._element.innerHTML = this.template(model);
    }

    template(model: T): string {
        
       throw new Error('You have to implement template method')
    }
}