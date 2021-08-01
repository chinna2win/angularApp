export{}
let message = 'Welcome back';
console.log(message);
let isBeginner : boolean = true;
let name : string = 'Chinna';
let sentance : string = `My name is ${name}
 i am a beginner in typescript`;

console.log(sentance);

let n : null = null;
let u : undefined = undefined;

//let isNew : boolean = null;
//let myName : string = undefined;

let list1 : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3];

let tuples : [number, String] = [232, 'something'];


enum Color {Red = 3, Green, Blue};

let c : Color = Color.Green;

console.log(c);

let randamvalue : any = 'rego';

randamvalue = "chinna";
randamvalue = true;

console.log(randamvalue);

let unknowntype : unknown = 'rego';

console.log((unknowntype as string).toUpperCase);


function add(num1 : number, num2? : number) : number {

    if(num2) 
    return num1 + num2;
    else
    return num1;
}

add(5, 10);
add(5)

function add_one(num1 : number, num2 : number = 10) : number {

    if(num2) 
    return num1 + num2;
    else
    return num1;
}

add_one(5)

console.log(add_one(5))


function fullName(person : {firstName : string, lastName : string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName : 'chinna',
    lastName : 'rego'
}; 

fullName(p);


interface Person {
    fName : string,
    lName? : string
}

function interfaceName(person : Person) {
    console.log(`${person.fName} ${person.lName}`)
}

let co = {
    fName : 'dharu'
};

interfaceName(co)


