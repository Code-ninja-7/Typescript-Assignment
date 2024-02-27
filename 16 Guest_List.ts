let Guest_List: string[] = ['ALI', 'ALTAMASH', 'NIMRA', 'BILAL'];

// // for (let i = 0; i < Guest_List.length; i++) {
// //     console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nIt is our pleasure to meet you n our party\n\nThank you !\n\n')

// }
let absent_Guest: string = 'NIMRA';
let new_Guest: string = 'AHMED';
Guest_List[2] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nIt is our pleasure to meet you n our party\n\nThank you !\n\n')

}
console.log(`MR. ${absent_Guest}is not comeing to the party.`);

console.log ('Good news ! we find a big Table so we are inviting more guests to the party');

Guest_List .unshift('jaffer');
Guest_List.splice(1,0, 'rafat');
Guest_List.push('farish');
for (let i=0;i<Guest_List.length;i++){
    console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nIt is our pleasure to meet you n our party\n\nThank you !\n\n')

}


