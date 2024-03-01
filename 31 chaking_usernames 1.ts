// Array of usernames
let usernames: string[] = ['syeda fahima', 'syeda esha', 'syeda nimra', ];

// Loop 
for (let i=0;i<usernames.length;i ++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(usernames[i] + 'thank you for login');
    }
}
// usernames is null or not
{
    if(usernames != null)
    console.log('list is not empty');
}
//for ermoving tha array names
while(usernames.length){
    usernames.pop();
}
if (usernames.length === 0){
    console.log (usernames ,'we need more users to add')

}