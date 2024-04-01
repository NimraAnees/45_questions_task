var current_users = ["Nimra", "Admin", "Aliza", "Dua", "Heena"];
var new_users = ["Nimra", "Fatima", "Laiba", "Admin", "Zubariya"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
