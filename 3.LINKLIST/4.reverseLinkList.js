class reverseLinkList{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class reverseList{
    constructor(value){
        const newnode=new reverseLinkList(value)
        this.head=newnode;
        this.tail=newnode;
        this.length=1
    }
    push(value){
        
const newnode=new reverseList(value)
if(!this.head){
    this.head=newnode
    this.tail=newnode
}
else{
this.tail.next=newnode;
this.tail=newnode
this.length++
}
    }
    reverse(){
const temp=this.head
this.head=this.tail
this.tail=temp
let next=temp
let prev=null

for(let i=0;i<this.length;i++){

next=temp.next
temp.next=prev
}
    }
}
const reverse=new reverseList(7)
reverse.push(88)
reverse.push(44)
reverse.push(99)
console.log(reverse)