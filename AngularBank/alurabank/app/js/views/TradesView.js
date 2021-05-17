System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, TradesView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            TradesView = class TradesView extends View_1.View {
                template(model) {
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
                ${model.toArray().map(trade => {
                        return `   
                    <tr>
                        <td>${trade.date.getDate()}/${trade.date.getMonth() + 1}/${trade.date.getFullYear()}</td>
                        <td>${trade.quantity}</td>
                        <td>${trade.value}</td>
                        <td>${trade.volume}</td>
                    </tr>                        
                `;
                    }).join('')}   
            </tbody>
                
            <tfoot>
            </tfoot>
            </table> `;
                }
            };
            exports_1("TradesView", TradesView);
        }
    };
});
