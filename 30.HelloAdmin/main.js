var users = ['Nimra', 'Heena', 'Dua', 'Admin', 'Areesha'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === 'Admin') {
        console.log("Hello adamin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging again."));
    }
}
