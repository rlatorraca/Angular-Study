const controller = new TradingController();

document
    .querySelector('form')
    .addEventListener('submit', controller.adicionar.bind(controller));