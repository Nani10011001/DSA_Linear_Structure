class node{
    constructor(values){
this.head=values
this.Next=null

    }
}
class linkedList{
    constructor(values){
this.head=new node(values)
this.tail=this.head
this.length=1
    }

//push
    push(value){
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        let newNode=new node(value)
         this.tail.Next=newNode
        this.tail=newNode
       
        this.length++
    }


    //pop
    pop(){
        if(!this.head){
            return null
        }
let temp=this.head;
let prev=this.head;
      while(temp.Next) {
prev=temp
temp=prev.Next

      }
     this.tail=prev
     this.tail.Next=null
     this.length--
     if(this.length===0){
        this.head=null
        this.tail=null
     }
     return temp
    }
    // unshift method
unshift(value){

    let newnode=new node(value)
    if(!this.head){
        this.head=newnode;
        this.tail=newnode;
    }
    

    newnode.Next=this.head
    this.head=newnode

    this.length++

}
// shift method
shift(){
    if(!this.head){
        return null
    }
    let temp =this.head
    this.head=this.head.Next
    temp.next=null
    this.length--
    if(this.length===0){
        this.tail=null
    }

}
// getFrist method
getFrist(){
    return this.head
}
// getLast method
getLast(){

    if(!this.head){
        return null
    }
    let temp=this.head
    
   while(temp){
    if(!temp.Next){
        return temp
    }
temp=temp.Next
   }

  
}
// get elment method
get(index){
    let count=0
    let start=this.head
    while(start){
        if(count===index){
return start
        }
        count++
        start=start.Next
    }
    return null
}
// set mehod
set(index,value){
    let count=0
    let temp=this.head
    while(temp){
        if(count===index){
    temp.head=value
    return true
        }
        count++
        temp=temp.Next
    return false
    }
}
// insert method
insert(index ,value){
    if(index===0){
        return this.unshift(value)
    }
    if(index===this.length){
        return this.push(value)
    
    }
    const newnode=new node(value)
    // uses the get method of the desire position  index-1 to get before elemnt
    const temp=this.get(index-1)
    newnode.Next=temp.Next
    temp.Next=newnode
    this.length++
    return true

}
size(){

    let counter=0
    const temp=this.head
    while(temp){
        temp.Next
counter++
    }
    return counter
}
}

const linkData=new linkedList(7)
linkData.push("nani")
linkData.push("kumar")

link.push()
console.log(linkData.size())
