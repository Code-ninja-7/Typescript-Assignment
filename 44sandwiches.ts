function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the these items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!\n");
}

// Call the function with different number of arguments
makeSandwich("cheaken", "Cheese", "onioun", "Tomato");
makeSandwich("mayo", "masterde", "katchup");
makeSandwich("Peanut butter", "Jelly");
