//Race number

let raceNumber = Math.floor(Math.random() * 1000);

let early = false;
let age = 16;

if (early && age > 18){
 raceNumber += 1000;
}

if (early && age > 18){
 console.log(`Your race time is 9:30am and race number is ${raceNumber}.`)
} else if (!early && age > 18){
 console.log(`Your race time is 11am and race number is ${raceNumber}.`)
} else if (age < 18){
 console.log(`Your race time is 12.30pm and race number is ${raceNumber}.`)
} else{
  console.log('See the registration desk.')
}
