const fname = ("Asad");
const lname = ("Khan");
console.log(fname+  lname);//its not a good prictice 

console.log(`my first name is ${fname} and last name is ${lname}`);

const gameName  = new String("Asad-khan");
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.charAt(3));
console.log(gameName.indexOf("s"));


const newString = ("   Asad   ");
console.log(newString);
console.log(newString.trim());

const url = "https://.asadyoutube.com/asad%20khan"
console.log(url)
console.log(url.replace("%20","-"));
console.log(url.includes("asad"));

const gameNameone = "asad-khan-G";
console.log(gameNameone.split("-"));








