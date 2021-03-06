import { Trades } from "../models/index";
import { View } from "./View";

export class TradesView extends View<Trades> {

    template(model: Trades): string {
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
                `}).join('')}   
            </tbody>
                
            <tfoot>
            </tfoot>
            </table> `;
    }

}
