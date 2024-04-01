var guest_list = ['Heena', 'Rafia', 'Dua', 'Nitasha'];
var not_present = "Rafia";
var new_guest = "Fareeha";
guest_list[1] = new_guest;
console.log("Ms. ".concat(not_present, " will not coming tomorrow on dinner"));
guest_list.unshift('Fatima', 'Unzila', 'Almirah');
console.log('\nUnfortunately we can not arrange a big table, only two people are invited.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Madam ".concat(remove_guest, " you are not invited on dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nYes you are still invited to dinner tomorrow\nThank you\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
