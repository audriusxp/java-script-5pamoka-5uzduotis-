window.onload = function() {
    const testinis = [5,12,3,6,8,14,15,5,6,10];
    console.log(testinis);
    
    console.log(isaugotiDidesnius10(testinis));
    console.log(suskaiciuotiDidesniusNei10(testinis));
    
    
    
}
function isaugotiDidesnius10(testinis){
    const rezultatas = [];
   
    for (let i = 0; i <testinis.length; i ++) {
        if (daugiau(testinis[i])){
            
            rezultatas.push(testinis[i]);
        }
       
        
    }
    return rezultatas;
}

function daugiau(x){
    return x > x;
}

function suskaiciuotiDidesniusNei10(testinis){
    let suma = 0;
    for (let i = 0; i <testinis.length; i ++) {
        if (daugiau(testinis[i])){
         
          suma += 1;
    
        }
           
    }
    return suma;   
}