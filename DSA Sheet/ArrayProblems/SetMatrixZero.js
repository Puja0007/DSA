function deepCopy(value){

    if(value === null || typeof value !== 'object'){
        return value;         
    }else if(Array.isArray(value)){
        let copyArr = [];
        for(let i=0; i<value.length; i++){
        copyArr[i] = deepCopy(value[i]);
        }
    }else if(typeof value === 'object'){
        let copyObj ={}
        for(let key in value){
            if(value.hasOwnProperty(key)){
                copyObj[key] = deepCopy(value[key]);
            }
        }

        return copyObj;
    }

    return value
}


const originalObject = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
};

console.log(deepCopy(originalObject));