import { TradingController } from "./controllers/TradingController";

const controller = new TradingController();


// document
//     .querySelector('form')
//     .addEventListener('submit', controller.add.bind(controller));

// Using Jquery
$('.form').submit(controller.add.bind(controller));
$('#import-button').click(controller.importarDados.bind(controller));