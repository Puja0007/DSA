function Print1toN(i,n){
    if(i>n){
        return;
    }
    else{
       
        console.log(i);
        i++;
        Print1toN(i,n);
    }
 

}

Print1toN(1,5);