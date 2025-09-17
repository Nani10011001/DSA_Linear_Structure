class MyArr{
    constructor(){
this.length=0
this.data={}

    }
    push(items){
        this.data[this.length]=items
        this.length++
        return this.length

    }
get(i){
    return this.data[i];
}
kayati(){
 const lastitem=this.data[this.length-1]
 delete this.data[this.length-1]
 this.length--
return lastitem

}
shift(){
    const firstItem=this.data[0]
    for(let i=0;i<this.length;i++){

        this.data[i]=this.data[i+1]
        delete this.data[this.length-1]
        this.length--
        return firstItem
    }
}
delete(index){
    const elem = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return elem;
}
}
const arr=new MyArr()
arr.push(4)
arr.push("purush")
arr.push("nani")
arr.push("nigth")
arr.push("watermelon")
//get mehod
arr.get(2)

console.log(arr.get(1)); // Should print "nani"
// pop
console.log(arr.kayati())
console.log(arr)
// shift front elem

console.log(arr.shift())
console.log(arr)
console.log(arr.delete(0))
console.log(arr)