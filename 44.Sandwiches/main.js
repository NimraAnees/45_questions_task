function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Sandwiches order:');
    for (var i = 0; i < items.length; i++) {
        console.log(" - ".concat(items[i]));
    }
}
console.log("Enjoy your meal");
sandwich('chicken', 'cheese', 'veggie');
sandwich('beef', 'tomato');
sandwich('loaded cheese', 'chicken steak');
