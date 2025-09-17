const elements=(str)=>str.split("").reverse().join("")


const palendrom=(enterElem,conParElem)=>{
    if(enterElem===conParElem) {
        console.log("palindrom",conParElem)
    }
    else{
        console.log("its not a palindrom",conParElem)
    }

}
palendrom(elements("mom"),"mom")
const elementEasy=(str)=>str.split("").reverse().join("")===str;
console.log(elementEasy("mam"))