let guest_list: string[]= ['Heena', 'Rafia', 'Dua', 'Nitasha'];
let not_present: string= "Rafia";
let new_guest: string= "Fareeha";
guest_list[1] = new_guest;
console.log(`Ms. ${not_present} will not coming tomorrow on dinner`);
guest_list.unshift('Fatima', 'Unzila', 'Almirah');
console.log('\nUnfortunately we can not arrange a big table, only two people are invited.');
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Madam ${remove_guest} you are not invited on dinner.`);
}
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Madam ' + guest_list[i] + ',\nYes you are still invited to dinner tomorrow.\nThank you\n');
}
guest_list.splice(0,2);
console.log(guest_list);