window.onload = function() {
    const testinis = [5,12,3,6,8,14,15,5,6,10];
    console.log(testinis);
    
    console.log(isaugotiDidesnius10(testinis));
    
    
    
}
function isaugotiDidesnius10(testinis){
    const rezultatas = [];
   
    for (let i = 0; i <testinis.length; i ++) {
        if (daugiau(testinis[i])){
            console.log("f");
            rezultatas.push(testinis[i]);
        }
       
        
    }
    return rezultatas;
}

function daugiau(x){
    return x > 10;
}