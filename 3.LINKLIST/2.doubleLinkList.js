class node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class linkList {
    constructor(value) {
        const newnode = new node(value);
        this.head = newnode;
        this.tail = newnode;
        this.length = 1;
    }

    push(value) {
        const newnode = new node(value);
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
        } else {
            // Link the new node at the end of the list
                        this.tail.next = newnode;
                        newnode.prev = this.tail;
                        this.tail = newnode;
        }
        this.length++;
    }

    pop() {
        if (this.length === 0) return undefined;
        const temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp.value;
    }
   unshift(value){
        const newnode=new node(value)
       
      if(!this.head){
this.head=newnode;
this.tail=newnode
      }
      newnode.next=this.head
      this.head.prev=newnode
      this.head=newnode
   
        this.length++
        return this;
    }
    shift(){

     const temp=this.head
  if(!this.head) return undefined
  if(this.length===1) 
  {
    this.head=null
    this.tail=null
  }
  else{
    const temp=this.head
    this.head=this.head.next;
    this.head.prev=null
    temp.next=null
    this.length--
  }
  return temp.value

    }
}

const doubleLink = new linkList(7);
doubleLink.push(79);
doubleLink.push(44);
doubleLink.push(7);
console.log(doubleLink.shift())
