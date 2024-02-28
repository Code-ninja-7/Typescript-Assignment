let Guest_List: string[] = ['ALI', 'ALTAMASH', 'NIMRA', 'BILAL'];

// // for (let i = 0; i < Guest_List.length; i++) {
// //     console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nIt is our pleasure to meet you n our party\n\nThank you !\n\n')

// }
let absent_Guest: string = 'NIMRA';
let new_Guest: string = 'AHMED';
Guest_List[2] = new_Guest;
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nIt is our pleasure to meet you n our party\n\nThank you !\n\n')

// }
// console.log(`MR. ${absent_Guest}is not comeing to the party.`);

// console.log('Good news ! we find a big Table so we are inviting more guests to the party');

Guest_List.unshift('jaffer');
Guest_List.splice(1, 0, 'rafat');
Guest_List.push('farish');
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nIt is our pleasure to meet you n our party\n\nThank you !\n\n')

// }
// console.log('\n Sorry we can not arrange the big table so only 2 peoples will be invited\n');
while (Guest_List.length > 2) {
    let remove_guest = Guest_List.pop();
    // console.log(`sorry MR . ${remove_guest}, yor are not invited to the party`);

}
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nyou are still invited n\nThank you !\n\n')

// }
Guest_List.splice(0, 2);
console.log(Guest_List);

// Exersice no 19

// print a message indicating the number of people you are inviting to dinner.

console.log( `total number of gust are :${Guest_List.length}`);

