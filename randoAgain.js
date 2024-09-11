// document.querySelector("button").addEventListener("click",(evt)=>{
//     console.log(evt);
// });

// const inpt=document.querySelector("input");
// inpt.addEventListener("keydown",(e)=>{
//     // console.log(e.key);
//     console.log(e.code);
// })

const form=document.querySelector("#ass");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("submitted");
})