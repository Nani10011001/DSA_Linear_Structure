class StackNode{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class stackData{
    constructor(value){
        const newnode=new StackNode(value)
        this.frist=newnode;
        
        this.length=1
    }
    push(value){
const node =new StackNode(value)
if(this.length===0){
   this.frist=node 
  
}
else{
    node.next=this.frist
    this.frist=node
    this.length++
}
return this

    }
    pop(){
        const temp=this.frist
if(this.length===0){
    return undefined
}
else{
    this.frist=this.frist.next
    temp.next=null
    this.length--
}
return temp.value

}
peek(){
    return this.frist
}
}
const stack=new stackData(88)

stack.push(77)
stack.push(33)
console.log(stack.pop())
console.log(stack.peek())