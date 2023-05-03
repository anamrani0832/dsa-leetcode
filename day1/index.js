function divisor(n){
    for(let i=0; i<=n; i++){
        if(n%i == 0){
           console.log(i);
        }
    }
}

function checkPrime(n){
console.log(Math.sqrt(n))
   for(let i=2; i<Math.sqrt(n); i++){
   
    if(n%i == 0){
        return false;
    }
   }
   return true;
}

let num = 5
let ans = checkPrime(num);
if(num != 1 && ans == true){
    console.log('prime');
}
else{
    console.log('not prime');
}
// divisor(36);