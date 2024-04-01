let current_users: string[]= ["Nimra","Admin", "Aliza", "Dua", "Heena"];
let new_users: string[]= ["Nimra", "Fatima", "Laiba", "Admin", "Zubariya"];

new_users.forEach(newUser =>{
    if(current_users.some(currentUser =>currentUser.toLowerCase() === newUser.toLowerCase())){
        console.log(`${newUser} will need to enter a new username.`);
    }else {
        console.log(`${newUser} is available.`);
    }
});