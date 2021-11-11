const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

// add(1, 2).then((sum) => {
//     console.log(sum);
//     add(3, sum).then((sum2) => {
//         console.log(sum2);
//     }).catch((e) => {
//         console.log('Error', e);
//     });
// }).catch((e) => {
//     console.log('Error', e);
// })

add(1, 2).then((sum) => {
    console.log(sum);
    return add(sum, 3);
}).then((sum) => {
    console.log(sum);
}).catch((e) => {
    console.log(e);
})
