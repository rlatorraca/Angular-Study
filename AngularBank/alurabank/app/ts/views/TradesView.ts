class TradesView {

    private _element: Element;

    constructor(selectorCSS: string) {
        this._element = document.querySelector(selectorCSS);
    }

    update(): void {
        this._element.innerHTML = this.template();
    }

    template(): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>QUANTITY</th>
                    <th>VALUE</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            </tbody>

            <tfoot>
            </tfoot>
         </table> `;
    }
}