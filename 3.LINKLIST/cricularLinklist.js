class circucularList{
    constructor(value){

        this.value=value
        this.next=null
        
    }
}
class circularLinkList{
    constructor(value){
const newNode=new circucularList(value)
this.head=newNode;
this.tail=newNode;
this.length=1
this.tail.next=this.head
    }
    push(value){
        const newnode=new circucularList(value)
        this.tail.next=newnode
        this.tail=newnode
        this.tail.next=this.head
        this.length++
        return this
    }
}
const circular=new circularLinkList(5)
console.log(circular)
console.log(circular.push(99))