export abstract class View<T> {

    //private _element: Element;

    //Usando query
    private _element: JQuery;
    private _escape: boolean;

    constructor(selector: string, escape?: boolean) {
        //this._element = document.querySelector(selector);
        // Usando Jquery
        this._element = $(selector);
        this._escape = escape;
    }

    update(model: T) {
        //this._element.innerHTML = this.template(model);
        // Usando Jquery
        let template = this.template(model);
        if(this._escape) 
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._element.html(template);
    }

    // template(model: T): string {

    //     throw new Error('You have to implement template method')
    // }

    abstract template(model: T): string;

}
