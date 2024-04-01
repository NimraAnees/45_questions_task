var guest_list = ['Heena', 'Rafia', 'Dua', 'Nitasha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + '\nWe invited you on dinner tomorrow. \nThank you\n');
}
var not_present = "Rafia";
var new_guest = "Fareeha";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + '\nWe invited you on dinner tomorrow. \nThank you\n');
}
console.log("Ms. ".concat(not_present, " will not coming tomorrow on dinner"));
