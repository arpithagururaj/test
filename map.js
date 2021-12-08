const arr =[1,2,3,4,5,6]


arr.map((ele)=>{
    console.log(ele,"element")
    return console.log(ele *2)
})



const result = arr.filter((ele)=>{
    return ele % 2 === 0
})

console.log(result)


const result1 = arr.find((ele)=>{
    return ele === 7
})

console.log(result1,"7")

const result11 = arr.find((ele)=>{
    return ele === 2
})

console.log(result11,"7")

const res = arr.find((ele) =>{
    return ele ===1
})
console.log(res)






