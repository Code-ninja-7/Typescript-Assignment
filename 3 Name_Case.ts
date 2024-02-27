let personeName:  string = '';
personeName = prompt("what is your name")||'';

let lowercase: string = personeName.toLocaleLowerCase();
let uppercase: string = personeName.toLocaleUpperCase();

let titelcase: string = personeName.split(" ").map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()).join('')

if (personeName!== null && personeName!== ''){
    alert(`hello${personeName},hear are your name in:
     Lowercase:${lowercase}
     Upercase:${uppercase}
     Titlecase${titelcase}` )
}
else

{alert("please fill your name!")}
    