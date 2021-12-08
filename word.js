let x =['hello','hai','welcome','myjob'];
let y =['haiiii']
let z =['haiii' , "",'mylife','i']


function myLif(arr){
    if (arr.length == 0) {
        return '';
    } else if (arr.length == 1) {
        return arr[0]; 
    }
    else {
        return arr.slice(0, -1).join(' ') + ' and ' + arr[arr.length-1];
    }
}



console.log(myLif(z))
    



