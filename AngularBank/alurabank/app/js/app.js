System.register(["./controllers/TradingController"], function (exports_1, context_1) {
    "use strict";
    var TradingController_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TradingController_1_1) {
                TradingController_1 = TradingController_1_1;
            }
        ],
        execute: function () {
            controller = new TradingController_1.TradingController();
            $('.form').submit(controller.add.bind(controller));
        }
    };
});
