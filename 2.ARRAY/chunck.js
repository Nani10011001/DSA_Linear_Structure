const chuck=(arr,size)=>{

    const chunck=[]
    let index=0
    while(index<arr.length){
const chunckSplit=arr.slice(index,index+size)
console.log(chunckSplit)
chunck.push(chunckSplit)
index+=size

    }
    return chunck
}
const arr=[2,3,4,7,9,0,3,4,3]
console.log(chuck(arr,3))
