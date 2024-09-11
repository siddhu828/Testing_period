//const body=document.querySelector("body");

//shortcut for the above
//const body=document.body;
const h1=document.querySelector("h1");
const btn=document.querySelector("#rgb");
btn.addEventListener("click",()=>{
    const {r,g,b}=randomColor();
    newColor=`rgb(${r},${g},${b})`;
    h1.innerText=newColor;
    document.body.style.backgroundColor=newColor;
    if(r+g+b >250){
        h1.style.color="black";
    }
    else{
        h1.style.color="white";
    }
    console.log(h1);
    
});

const randomColor=()=>{
    const r= Math.floor(Math.random()*255);
    const g= Math.floor(Math.random()*255);
    const b= Math.floor(Math.random()*255);
    return {r,g,b};
};