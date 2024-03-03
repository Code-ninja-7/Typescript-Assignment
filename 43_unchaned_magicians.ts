// Function to modify magician names by adding "the Great"
function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => "the Great " + magician);
}

// Function to display magician names
function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Array of magician names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller"];

// Copy the original array of magician names
let originalMagicians: string[] = [...magicians];

// new copy of the array
let greatMagicians: string[] = makeGreat([...magicians]);

// original list of magicians
console.log("Original Magicians:");
showMagicians(originalMagicians);

// new  list of magicians
console.log("\nMagicians with 'the Great':");
showMagicians(greatMagicians);
