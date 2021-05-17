namespace Views {

    export abstract class View<T> {

        //private _element: Element;

        //Usando query
        private _element: JQuery;


        constructor(selector: string) {
            //this._element = document.querySelector(selector);
            // Usando Jquery
            this._element = $(selector);
        }

        update(model: T) {
            //this._element.innerHTML = this.template(model);
            // Usando Jquery
            this._element.html(this.template(model));
        }

        // template(model: T): string {

        //     throw new Error('You have to implement template method')
        // }

        abstract template(model: T): string;
    }
}
