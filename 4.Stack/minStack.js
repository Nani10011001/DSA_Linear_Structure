class node {
   constructor(value){
    this.value=value;
    this.next=null;
   } 
};

class StackData{
    constructor(value){
        const newnode=new node(value);
        this.last=newnode;
        this.length=1;
    }
    push(value){
        const newnode=new node(value);
        newnode.next=this.last;
        this.last=newnode;
        this.length++;
    }
    pop(){
        if(this.length===0) return null
        const temp=this.last;
        this.last=this.last.next
        temp.next=null
        this.length--
        return temp.value
    }
    peek(){
        return this.last
    }
    min(){
        let current=this.last;
        let minvalue=current.value
while(current.next){// run until the next=null 
current=current.next
if(current.value<minvalue){


minvalue=current.value
}
return minvalue
}

    }
  
}
const stackMin=new StackData(66)

stackMin.push(96)
stackMin.push(99)
stackMin.push(7)
console.log(stackMin)
console.log(stackMin.min())