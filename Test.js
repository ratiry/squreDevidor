
let findSquares=(n)=>{
    let d=2;
    let squares={};
    let i=0;
    while(d*d<=n){
        
        if(n%d==0){
            n/=d;
            i+=1;
            if(n%d==0){
                n/=d
                i+=1;
                squares[d]=i;
            }
        }else{
            i=0;
            d+=1;
        }

    }
    return squares
}
let makeBigSquare=(obj)=>{
    let square=1;
    if(Object.keys(obj).length==0){
        return 1
    }
    if(Object.keys(obj).length>1){
        for(let i=0;i<Object.keys(obj).length;i++){
            square*=Object.keys(obj)[i]**Object.values(obj)[i];
        }
        return square
    }else{
        return Number(Object.keys(obj)[0])**Object.values(obj)[0]
    }
}
let squares=makeBigSquare(findSquares(90));
console.log(squares)
