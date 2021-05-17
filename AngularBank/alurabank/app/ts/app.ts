const controller = new TradingController();


// document
//     .querySelector('form')
//     .addEventListener('submit', controller.add.bind(controller));

// Using Jquery
$('.form').submit(controller.add.bind(controller));