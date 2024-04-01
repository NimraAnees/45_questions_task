var guest_list = ['Heena', 'Rafia', 'Dua', 'Nitasha'];
var not_present = "Rafia";
var new_guest = "Fareeha";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. \nThank you\n');
}
console.log("Ms. ".concat(not_present, " will not coming tomorrow on dinner"));
guest_list.unshift('Fatima', 'Unzila', 'Almirah');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. We found a big table so we decided to invite three more guests\nThank you\n');
}
