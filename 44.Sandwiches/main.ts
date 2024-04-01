function sandwich(...items: string[]): void{
    console.log('Sandwiches order:')

    for (let i = 0; i < items.length; i++) {
        console.log(` - ${items[i]}`)
    }
}
console.log("Enjoy your meal");
sandwich('chicken', 'cheese', 'veggie')
sandwich('beef', 'tomato')
sandwich('loaded cheese', 'chicken steak')