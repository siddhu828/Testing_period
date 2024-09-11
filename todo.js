let userInput= prompt("what do you want to do:");
let list=[];
while(true){
    if(userInput=="new"){
        let newInput=prompt("add things:");
        list.push(newInput);
        console.log("!ToDo Added!")
    }
    else if(userInput=="list"){
        console.log("***********");
        for(let i in list){
            console.log(`${i}:${list[i]}`)
        }
        console.log("***********");
    }
    else if(userInput=="delete"){
        let index=parseInt(prompt("which index element should be deleted:"));
        //delete list[newPrompt];
        list.splice(index, 1);
        console.log("!ToDo Removed!");
    }
    else if(userInput=="quit"){
        console.log("!YOU QUIT THE APP!");
        break;
    }
    userInput= prompt("what do you want to do:");
}