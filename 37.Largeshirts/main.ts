function makeShirt(size: string = "large", text: string = "I love typescript"): void{
    console.log(`You have ordered a ${size} shirt that says ${text}`);
}
makeShirt();
makeShirt('medium')
makeShirt('small',' i need a big shirt to wear');