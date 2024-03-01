// Array of usernames
let current_users: string[] = ['syeda fahima', 'syeda esha', 'syeda nimra', ];
let new_users : string[]=['ali','ahmed','shafi',];


// Function to check if usernames are available
function checkUsernames(users: string[]) {
    // Check if there are existing users
    if (current_users.length === 0) {
        console.log("No users found! Please create some users.");
        return;
    }

    //  new usernames
    for (let new_username of users) {
        // Check if the new username is already taken
        let exists = false;
        for (let user of current_users) {
            if (user.toLowerCase() === new_username.toLowerCase()) {
                exists = true;
                break;
            }
        }

        //  result
        if (exists) {
            console.log(`Sorry, "${new_username}" is already taken.`);
        } else {
            console.log(`"${new_username}" is available.`);
        }
    }
}

// Check new usernames against existing ones
console.log("Checking new usernames:");
checkUsernames(new_users);

// empty the list of current users
current_users = [];

// Check again after emptying the list
console.log("\nEmptying current user list and checking new usernames again:");
checkUsernames(new_users);
