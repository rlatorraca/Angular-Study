System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, TradeInService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            TradeInService = class TradeInService {
                getTradesService(handler) {
                    return fetch('http://localhost:8080/dados')
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((dados) => dados.map(dado => new index_1.TradeIn(new Date(), dado.montante, dado.vezes)))
                        .catch(err => {
                        console.log(err);
                        throw new Error("ERROR: Can't import data from API");
                    });
                }
            };
            exports_1("TradeInService", TradeInService);
        }
    };
});
