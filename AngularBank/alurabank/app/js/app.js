const controller = new TradingController();
document
    .querySelector('form')
    .addEventListener('submit', controller.add.bind(controller));
