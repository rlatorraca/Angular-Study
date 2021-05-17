import { TradingController } from "./controllers/TradingController";
const controller = new TradingController();
$('.form').submit(controller.add.bind(controller));
