class TradesView {
    constructor(selectorCSS) {
        this._element = document.querySelector(selectorCSS);
    }
    update() {
        this._element.innerHTML = this.template();
    }
    template() {
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
