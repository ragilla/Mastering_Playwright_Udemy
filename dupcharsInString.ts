let strg = "aabbcde";
//const strg = [1,2,1,2,3]
for (let i = 0; i < strg.length; i++) {
    for (let j = i + 1; j < strg.length; j++) {
        if (strg[i] === strg[j]) {
            console.log(strg[i]);
            break;
            
          
        }
    }
}