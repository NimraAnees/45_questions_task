function show_magicians(magicians: string[]) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
function make_great(magicians: string[]): void{
    for (let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i]   +  ' the great '
    }
}
const magicians2: string[] = ['Steve', 'Joseph', 'Edward'];
make_great(magicians2)
show_magicians(magicians2)