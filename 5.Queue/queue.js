class node{
    constructor(value){
this.value=value;
this.next=null

    }
}
class QueueData{
    constructor(value){
        const newnode=new node(value)
        this.frist=newnode;
        this.last=newnode;
        this.length=1
    }
    enqueue(value){
         const newnode=new node(value)
        if(!this.frist){
this.frist=newnode;
this.last=newnode

        }
       
        this.last.next=newnode;
        this.last=newnode
        this.length++
    }
    dequeue(){

        if(this.length===0){
            return undefined
        }
        let temp=this.frist
        this.frist=this.frist.next
        temp.next=null
        this.length--
      return temp.value
    }
}
const queue=new QueueData(231)
queue.enqueue(66)
queue.enqueue(77)
console.log(queue)
console.log(queue.dequeue())
