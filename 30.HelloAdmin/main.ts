let users: string[] = ['Nimra', 'Heena', 'Dua', 'Admin', 'Areesha'];

for(let user of users){
    if(user === 'Admin'){
        console.log("Hello adamin, would you like to see a status report?")
    }
else{
    console.log(`Hello ${user}, thank you for logging again.`)
}
}