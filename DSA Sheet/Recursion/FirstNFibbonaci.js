function Fibbonaci(n){
    if(n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }
    return Fibbonaci(n-1) + Fibbonaci(n-2);
}

for(let i =0; i<=3; i++){
    console.log(Fibbonaci(i));
}