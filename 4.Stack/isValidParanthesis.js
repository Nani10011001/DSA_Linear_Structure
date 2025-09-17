const isValidParanthasis=str=>{

const stack=[]

const brackets={
    "{":"}",
    "(":")",
    "[":"]",
}
for(let data of str){
    
    // If it's an opening bracket
    if(brackets[data]){
        stack.push(data)
    }
    // If it's a closing bracket
    else if(stack.length===0){
        return false
    }
    else{
        const top=stack.pop()
        // Check if the closing bracket matches the expected one
        if(data !== brackets[top]){
            return false
        }
    }
}

// After processing all characters, stack should be empty if all brackets were matched
return stack.length === 0
}
console.log(isValidParanthasis("(){}"))
console.log(isValidParanthasis("(}"))