const items=["orange","apple","banana","grapes","kiwi","avacado","dragonfruite"]


const on=(selitem)=>{
    for(let i=0;i<=items.length;i++){
        if(items[i]===selitem){
            console.log("found:"+selitem)
        }
    }
}
on("kiwi")