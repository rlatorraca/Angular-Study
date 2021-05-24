
import { PartialTradeIn, TradeIn } from "../models/index";

export class TradeInService {

    getTradesService(handler: ResponseHandler): Promise<TradeIn[]> {

        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: PartialTradeIn[]) =>
                dados.map(dado => new TradeIn(new Date(), dado.montante, dado.vezes))
            )
            .catch(err => {
                console.log(err);
                throw new Error("ERROR: Can't import data from API");
            })
    }
}

export interface ResponseHandler {

    (res: Response): Response;
}