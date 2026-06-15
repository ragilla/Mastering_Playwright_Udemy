for (let num = 2; num <= 100; num++) {
    let flag = 1;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = 0;
            break;
        }
    }

    if (flag==1) {
        console.log(num);
    }
}