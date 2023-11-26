function PrintNto1(n){
    console.log(n)
    if(n == 1){
        return;
    }
    return PrintNto1(n-1);
}

PrintNto1(5);

/*
printNto1(5) -> printNto1(4) -> printNto1(3) -> printNto1(2) -> printNto1(1)    
*/