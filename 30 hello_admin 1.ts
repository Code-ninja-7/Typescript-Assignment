// Array of usernames
let usernames: string[] = ['syeda fahima', 'syeda esha', 'syeda nimra', ];

// Loop 
for (let i=0;i<usernames.length;i ++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames}, thank you for logging in again.`);
    }
}
