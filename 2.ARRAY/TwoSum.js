const sumFind=(arr,target)=>{
for(let i=0;i<arr.length;i++){
 for(let j=i+1 ;j<=arr.length; j++){
    if(arr[i]+arr[j]===target)
    {
        return [i,j]
    }
 }
 return -1
}

}
const arr=[4,5,6,6]
console.log(sumFind(arr,20))