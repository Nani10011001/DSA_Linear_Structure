
const intRev=(intR)=>{
   const revInt= intR.toString().split("").reverse().join("")

    return parseInt(revInt)*Math.sign(intR)
}

console.log(intRev(77778))