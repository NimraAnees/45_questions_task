let guest_list: string[]= ['Heena', 'Rafia', 'Dua', 'Nitasha'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Madam ' + guest_list[i] +'\nWe invited you on dinner tomorrow. \nThank you\n');
}
let not_present: string= "Rafia";
let new_guest: string= "Fareeha";
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Madam ' + guest_list[i] +'\nWe invited you on dinner tomorrow. \nThank you\n');
}
console.log(`Ms. ${not_present} will not coming tomorrow on dinner`);