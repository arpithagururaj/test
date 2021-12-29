// Write a JavaScript function to find a word within a string. 
// Test Data :
// console.log(findWord('The quick brown fox', 'fox')); 
// console.log(findWord('aa bb cc dd aa', 'aa'));
// Output : 
// "'fox' was found 1 times." 
// "'aa' was found 2 times."


function str(a,b){

// let arr = str().
    // console.log(a,b)

    let arr = a.split(' ');
    // console.log(arr)
    
    let x = 0;

    for(let i=0;i<=arr.length;i++){ 
        // console.log(arr[i])
        if(arr[i]==b){
            x = x+1;
            // console.log('x')
        
    }

   
    

}
return `${b} was found ${x} times`
// return ''+b+' was found '+x+' times';
}

console.log(str('The quick brown fox fox', 'fox'))




