function reverseStr(str){

    const stack=[]

    for(char of str){

    stack.push(char)
    console.log(char)
    }
    let reverin=""
    while(stack.length>0){
        reverin+=stack.pop()
        
    }
return reverin
}
console.log(reverseStr("nanikumar i am good guy"))