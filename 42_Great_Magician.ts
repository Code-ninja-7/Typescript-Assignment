
// function
function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => "the Great " + magician);
}

// List of magicians
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Charlie"];

// Modify the list of magicians
magicians = makeGreat(magicians);

// modified list
magicians.forEach(magician => console.log(magician));
