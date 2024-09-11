// for(let i=0;i<5;i++){
//     console.log("iteration:",i);
//     for(let j=0;j<i;j++){
//         console.log(j,"hehe motherfucker");
//     }
// }

// const g="andrew";
// let guess=prompt("enter the secret code:");
// while(guess!=g){
//     guess=prompt("enter the secret code:");
// }
// let input=prompt("say some shit:");
// while(true){
//     input=prompt(input);
//     if(input.toLowerCase()==="stop copying me") break;
// }console.log("you win");

//guess game
//let input=parseInt(prompt("enter your maximum number:"));
//this condition mean that if input is not falsy cause if in input someone enters string then it will give NaN which is falsy
// while (!input){
//     input=parseInt(prompt("enter a valid number:"));
// }
// const targetNum=Math.floor(Math.random()*input)+1;
// let guess=prompt("enter your first guess:");
// let attempts=1;
// while(parseInt(guess)!=targetNum){
//     if(guess== 'q') break;
//     guess=parseInt(guess);
//     attempts++;
//     if(guess<targetNum){
//         guess=prompt(`you are at a lower value. enter a new guess:`);
//     }
//     else if(guess>targetNum){
//         guess=prompt(`you are at a higher value. enter a new guess:`);
//         attempts++;
//     }
//     else{
//         guess=prompt("invalid guess. please enter a number of 'q' to quit");
//     }
// }
// console.log(`you took ${attempts} guesses.`);

// const arr=["asasas","sdsd","dwwwewq","erere","weqwew","abigail"];
// //for loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// //for of
// for( let i of arr){
//     console.log(i);
// }

// let obejctLiteral={ddd:12,wew:33,qwew:54};
// let r=0;
// let l=Object.values(obejctLiteral);
// for(let i of l){
//     r=r+i;
// }
// let rand=r/l.length;
// console.log(`the average is: ${rand}`)

// const square= function (num){
//     return num*num;

// }

// function makeBetweenFunc(min,max){
//     return function(num){
//         return num >=min && num <=max;
//     }
// }

// const sqaure=(a)=>{
//     return a*a;
// }

//setTimeout
// console.log("tities");
// setTimeout(()=>{
//     console.log("...hi")
// },3000);

const num=[1,2,3,4,5,6,7,8];
const a=num.map(n=>{
    return n<4;
});

const d=num.filter(n=>{
    return n<4;
});