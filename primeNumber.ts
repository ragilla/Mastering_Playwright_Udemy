for (let i = 0; i < 100; i++) {
    let flag = 1;
    for (let j = 2; j < i; j++) {
        if (i % 2 === 0) {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        console.log(i);
    }   
}