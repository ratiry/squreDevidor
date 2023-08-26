
let findSquares=(n)=>{
    let d=2;
    let squares=1;
    let i=0;
    while(d*d<=n){
        
        if(n%d==0){
            n/=d;
            if(n%d==0){
                n/=d
                squares=squares*(d**2);
            }
        }else{
            d+=1;
        }

    }
    return squares
}
let squares=findSquares(4536);
console.log(squares)
